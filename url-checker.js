class URLSafetyChecker {
    constructor() {
        this.suspiciousPatterns = {
            // Suspicious TLDs
            tlds: ['.tk', '.ml', '.ga', '.cf', '.buzz', '.xyz'],
            
            // Suspicious keywords
            keywords: [
                'free', 'win', 'prize', 'lottery', 'bonus', 'claim',
                'urgent', 'verify', 'suspend', 'limited', 'exclusive',
                'download', 'install', 'update', 'security', 'virus',
                'malware', 'trojan', 'phishing', 'scam', 'fake'
            ],
            
            // Suspicious URL patterns
            patterns: [
                /bit\.ly/i,
                /tinyurl\.com/i,
                /shortened/i,
                /redirect/i,
                /http:\/\/\d+\.\d+\.\d+\.\d+/i,  // IP addresses
                /[a-z0-9]{20,}/i,  // Long random strings
                /[^a-zA-Z0-9.-]/i  // Special characters
            ]
        };
        
        this.trustedDomains = [
            'google.com', 'youtube.com', 'facebook.com', 'twitter.com',
            'instagram.com', 'linkedin.com', 'microsoft.com', 'apple.com',
            'amazon.com', 'netflix.com', 'github.com', 'stackoverflow.com',
            'wikipedia.org', 'reddit.com', 'medium.com'
        ];
    }

    async checkURL(url) {
        try {
            // Clean and validate URL
            const cleanUrl = this.cleanURL(url);
            if (!this.isValidURL(cleanUrl)) {
                return {
                    url: cleanUrl,
                    is_safe: false,
                    risk_level: 'High',
                    reasons: ['Invalid URL format'],
                    score: 0,
                    recommendations: ['Please enter a valid URL']
                };
            }

            // Analyze URL
            const analysis = this.analyzeURL(cleanUrl);
            
            // Calculate risk score
            const score = this.calculateRiskScore(analysis);
            
            // Determine safety
            const is_safe = score >= 70;
            const risk_level = this.getRiskLevel(score);
            
            return {
                url: cleanUrl,
                is_safe: is_safe,
                risk_level: risk_level,
                reasons: analysis.reasons,
                score: score,
                recommendations: this.getRecommendations(analysis, score),
                details: {
                    domain: analysis.domain,
                    tld: analysis.tld,
                    has_https: analysis.has_https,
                    is_ip_address: analysis.is_ip_address,
                    is_shortened: analysis.is_shortened,
                    is_trusted: analysis.is_trusted
                }
            };
            
        } catch (error) {
            return {
                url: url,
                is_safe: false,
                risk_level: 'High',
                reasons: ['Error analyzing URL: ' + error.message],
                score: 0,
                recommendations: ['Please check the URL and try again']
            };
        }
    }

    cleanURL(url) {
        // Add protocol if missing
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        
        try {
            const urlObj = new URL(url);
            return urlObj.href;
        } catch {
            return url;
        }
    }

    isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    analyzeURL(url) {
        const reasons = [];
        let riskFactors = 0;
        
        try {
            const urlObj = new URL(url);
            const domain = urlObj.hostname.toLowerCase();
            const tld = domain.split('.').pop();
            
            // Check if it's an IP address
            const is_ip_address = /^(\d{1,3}\.){3}\d{1,3}$/.test(domain);
            if (is_ip_address) {
                reasons.push('Uses IP address instead of domain name');
                riskFactors += 3;
            }
            
            // Check TLD
            if (this.suspiciousPatterns.tlds.includes('.' + tld)) {
                reasons.push('Uses suspicious TLD: .' + tld);
                riskFactors += 2;
            }
            
            // Check if it's a trusted domain
            const is_trusted = this.trustedDomains.some(trusted => 
                domain.includes(trusted) || trusted.includes(domain)
            );
            
            // Check for shortened URLs
            const is_shortened = this.suspiciousPatterns.patterns.some(pattern => 
                pattern.test(url)
            );
            if (is_shortened) {
                reasons.push('Uses URL shortening service');
                riskFactors += 1;
            }
            
            // Check for suspicious keywords in URL
            const url_lower = url.toLowerCase();
            const foundKeywords = this.suspiciousPatterns.keywords.filter(keyword => 
                url_lower.includes(keyword)
            );
            if (foundKeywords.length > 0) {
                reasons.push('Contains suspicious keywords: ' + foundKeywords.join(', '));
                riskFactors += foundKeywords.length;
            }
            
            // Check for special characters
            if (this.suspiciousPatterns.patterns[4].test(url)) {
                reasons.push('Contains suspicious characters');
                riskFactors += 2;
            }
            
            // Check HTTPS
            const has_https = url.startsWith('https://');
            if (!has_https) {
                reasons.push('Not using HTTPS encryption');
                riskFactors += 1;
            }
            
            // Check domain length
            if (domain.length > 50) {
                reasons.push('Unusually long domain name');
                riskFactors += 1;
            }
            
            return {
                domain: domain,
                tld: tld,
                has_https: has_https,
                is_ip_address: is_ip_address,
                is_shortened: is_shortened,
                is_trusted: is_trusted,
                reasons: reasons,
                riskFactors: riskFactors
            };
            
        } catch (error) {
            return {
                domain: 'unknown',
                tld: 'unknown',
                has_https: false,
                is_ip_address: false,
                is_shortened: false,
                is_trusted: false,
                reasons: ['Error parsing URL: ' + error.message],
                riskFactors: 5
            };
        }
    }

    calculateRiskScore(analysis) {
        let score = 100;
        
        // Subtract points for risk factors
        score -= analysis.riskFactors * 10;
        
        // Add points for trusted domains
        if (analysis.is_trusted) {
            score += 20;
        }
        
        // Add points for HTTPS
        if (analysis.has_https) {
            score += 10;
        }
        
        // Ensure score is within bounds
        return Math.max(0, Math.min(100, score));
    }

    getRiskLevel(score) {
        if (score >= 80) return 'Low';
        if (score >= 60) return 'Medium';
        if (score >= 40) return 'High';
        return 'Very High';
    }

    getRecommendations(analysis, score) {
        const recommendations = [];
        
        if (!analysis.has_https) {
            recommendations.push('Look for HTTPS version of the site');
        }
        
        if (analysis.is_shortened) {
            recommendations.push('Use a URL expander to check the final destination');
        }
        
        if (analysis.is_ip_address) {
            recommendations.push('Be cautious - IP addresses are often used for phishing');
        }
        
        if (analysis.riskFactors > 3) {
            recommendations.push('Multiple risk factors detected - proceed with caution');
        }
        
        if (score < 50) {
            recommendations.push('Consider using a trusted security scanner');
            recommendations.push('Verify the source before clicking');
        }
        
        if (analysis.is_trusted) {
            recommendations.push('This appears to be a trusted domain');
        }
        
        return recommendations;
    }
}

// Export for use in HTML
window.URLSafetyChecker = URLSafetyChecker;
