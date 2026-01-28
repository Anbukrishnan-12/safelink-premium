class CompanyVerifier {
    constructor() {
        this.companies = {
            // Tech Giants
            'google': {
                company_name: 'Google LLC',
                industry: 'Technology',
                location: 'Mountain View, California, USA',
                description: 'Multinational technology company specializing in Internet-related services and products',
                founded_year: 1998,
                employee_count: '150,000+',
                domain: 'google.com',
                website: 'https://google.com',
                logo: '🔍',
                trust_score: 95
            },
            'microsoft': {
                company_name: 'Microsoft Corporation',
                industry: 'Technology',
                location: 'Redmond, Washington, USA',
                description: 'Technology company developing, manufacturing, licensing, and supporting computer software and services',
                founded_year: 1975,
                employee_count: '200,000+',
                domain: 'microsoft.com',
                website: 'https://microsoft.com',
                logo: '💻',
                trust_score: 95
            },
            'apple': {
                company_name: 'Apple Inc.',
                industry: 'Technology',
                location: 'Cupertino, California, USA',
                description: 'Technology company that designs, develops, and sells consumer electronics, computer software, and online services',
                founded_year: 1976,
                employee_count: '150,000+',
                domain: 'apple.com',
                website: 'https://apple.com',
                logo: '🍎',
                trust_score: 95
            },
            'amazon': {
                company_name: 'Amazon.com Inc.',
                industry: 'E-commerce',
                location: 'Seattle, Washington, USA',
                description: 'E-commerce and cloud computing company providing online retail, web services, and artificial intelligence',
                founded_year: 1994,
                employee_count: '1,500,000+',
                domain: 'amazon.com',
                website: 'https://amazon.com',
                logo: '🛒',
                trust_score: 95
            },
            'facebook': {
                company_name: 'Meta Platforms Inc.',
                industry: 'Social Media',
                location: 'Menlo Park, California, USA',
                description: 'Social media and technology company providing social networking services and digital advertising',
                founded_year: 2004,
                employee_count: '80,000+',
                domain: 'meta.com',
                website: 'https://meta.com',
                logo: '📘',
                trust_score: 90
            },
            'tesla': {
                company_name: 'Tesla Inc.',
                industry: 'Automotive',
                location: 'Austin, Texas, USA',
                description: 'Electric vehicle manufacturing, battery energy storage, and solar panel manufacturing company',
                founded_year: 2003,
                employee_count: '140,000+',
                domain: 'tesla.com',
                website: 'https://tesla.com',
                logo: '🚗',
                trust_score: 85
            },
            'netflix': {
                company_name: 'Netflix Inc.',
                industry: 'Entertainment',
                location: 'Los Gatos, California, USA',
                description: 'Subscription streaming service and production company offering television series, films, and games',
                founded_year: 1997,
                employee_count: '15,000+',
                domain: 'netflix.com',
                website: 'https://netflix.com',
                logo: '🎬',
                trust_score: 90
            },
            'linkedin': {
                company_name: 'LinkedIn Corporation',
                industry: 'Social Media',
                location: 'Sunnyvale, California, USA',
                description: 'Professional networking and career development social networking platform for professionals',
                founded_year: 2002,
                employee_count: '20,000+',
                domain: 'linkedin.com',
                website: 'https://linkedin.com',
                logo: '💼',
                trust_score: 90
            },
            'twitter': {
                company_name: 'X Corp. (Twitter)',
                industry: 'Social Media',
                location: 'San Francisco, California, USA',
                description: 'Social networking and microblogging service for real-time communication and information sharing',
                founded_year: 2006,
                employee_count: '7,500+',
                domain: 'twitter.com',
                website: 'https://twitter.com',
                logo: '🐦',
                trust_score: 85
            },
            'spotify': {
                company_name: 'Spotify Technology S.A.',
                industry: 'Entertainment',
                location: 'Stockholm, Sweden',
                description: 'Audio streaming and media services provider offering music, podcasts, and video content',
                founded_year: 2006,
                employee_count: '9,000+',
                domain: 'spotify.com',
                website: 'https://spotify.com',
                logo: '🎵',
                trust_score: 85
            },
            'uber': {
                company_name: 'Uber Technologies Inc.',
                industry: 'Transportation',
                location: 'San Francisco, California, USA',
                description: 'Transportation network company offering ride-hailing, food delivery, and freight transport',
                founded_year: 2009,
                employee_count: '32,000+',
                domain: 'uber.com',
                website: 'https://uber.com',
                logo: '🚕',
                trust_score: 80
            },
            'adobe': {
                company_name: 'Adobe Inc.',
                industry: 'Software',
                location: 'San Jose, California, USA',
                description: 'Software company specializing in creativity and multimedia products for digital marketing and design',
                founded_year: 1982,
                employee_count: '30,000+',
                domain: 'adobe.com',
                website: 'https://adobe.com',
                logo: '🎨',
                trust_score: 90
            },
            'salesforce': {
                company_name: 'Salesforce Inc.',
                industry: 'Software',
                location: 'San Francisco, California, USA',
                description: 'Cloud-based software company providing customer relationship management and enterprise applications',
                founded_year: 1999,
                employee_count: '80,000+',
                domain: 'salesforce.com',
                website: 'https://salesforce.com',
                logo: '☁️',
                trust_score: 85
            },
            'oracle': {
                company_name: 'Oracle Corporation',
                industry: 'Software',
                location: 'Austin, Texas, USA',
                description: 'Database software and cloud engineering company providing enterprise software and cloud solutions',
                founded_year: 1977,
                employee_count: '140,000+',
                domain: 'oracle.com',
                website: 'https://oracle.com',
                logo: '🗄️',
                trust_score: 85
            },
            'intel': {
                company_name: 'Intel Corporation',
                industry: 'Technology',
                location: 'Santa Clara, California, USA',
                description: 'Technology company designing and manufacturing microprocessors, chipsets, and integrated circuits',
                founded_year: 1968,
                employee_count: '130,000+',
                domain: 'intel.com',
                website: 'https://intel.com',
                logo: '🔧',
                trust_score: 90
            },
            'nvidia': {
                company_name: 'NVIDIA Corporation',
                industry: 'Technology',
                location: 'Santa Clara, California, USA',
                description: 'Technology company designing graphics processing units and system-on-a-chip units for gaming and AI',
                founded_year: 1993,
                employee_count: '30,000+',
                domain: 'nvidia.com',
                website: 'https://nvidia.com',
                logo: '🎮',
                trust_score: 85
            },
            'paypal': {
                company_name: 'PayPal Holdings Inc.',
                industry: 'Finance',
                location: 'San Jose, California, USA',
                description: 'Digital payments company providing online payment solutions and money transfer services',
                founded_year: 1998,
                employee_count: '30,000+',
                domain: 'paypal.com',
                website: 'https://paypal.com',
                logo: '💳',
                trust_score: 90
            },
            'stripe': {
                company_name: 'Stripe Inc.',
                industry: 'Finance',
                location: 'San Francisco, California, USA',
                description: 'Financial technology company providing payment processing and economic infrastructure for internet businesses',
                founded_year: 2010,
                employee_count: '8,000+',
                domain: 'stripe.com',
                website: 'https://stripe.com',
                logo: '💰',
                trust_score: 80
            },
            'shopify': {
                company_name: 'Shopify Inc.',
                industry: 'E-commerce',
                location: 'Ottawa, Ontario, Canada',
                description: 'E-commerce platform company providing online store creation and management tools for businesses',
                founded_year: 2006,
                employee_count: '10,000+',
                domain: 'shopify.com',
                website: 'https://shopify.com',
                logo: '🛍️',
                trust_score: 85
            },
            'airbnb': {
                company_name: 'Airbnb Inc.',
                industry: 'Hospitality',
                location: 'San Francisco, California, USA',
                description: 'Online marketplace for lodging and tourism experiences connecting hosts with travelers worldwide',
                founded_year: 2008,
                employee_count: '6,000+',
                domain: 'airbnb.com',
                website: 'https://airbnb.com',
                logo: '🏠',
                trust_score: 80
            },
            'zoom': {
                company_name: 'Zoom Video Communications Inc.',
                industry: 'Technology',
                location: 'San Jose, California, USA',
                description: 'Communications technology company providing video conferencing and online chat services',
                founded_year: 2011,
                employee_count: '8,000+',
                domain: 'zoom.us',
                website: 'https://zoom.us',
                logo: '📹',
                trust_score: 75
            },
            'slack': {
                company_name: 'Slack Technologies Inc.',
                industry: 'Technology',
                location: 'San Francisco, California, USA',
                description: 'Business communication platform offering team messaging, collaboration tools, and workflow automation',
                founded_year: 2009,
                employee_count: '12,000+',
                domain: 'slack.com',
                website: 'https://slack.com',
                logo: '💬',
                trust_score: 80
            },
            'github': {
                company_name: 'GitHub Inc.',
                industry: 'Technology',
                location: 'San Francisco, California, USA',
                description: 'Internet hosting service for software development and version control using Git',
                founded_year: 2008,
                employee_count: '3,000+',
                domain: 'github.com',
                website: 'https://github.com',
                logo: '🐙',
                trust_score: 90
            },
            'dropbox': {
                company_name: 'Dropbox Inc.',
                industry: 'Technology',
                location: 'San Francisco, California, USA',
                description: 'File hosting service offering cloud storage, file synchronization, and personal cloud services',
                founded_year: 2007,
                employee_count: '3,000+',
                domain: 'dropbox.com',
                website: 'https://dropbox.com',
                logo: '📁',
                trust_score: 80
            }
        };
    }

    async verifyCompany(input) {
        try {
            const cleanInput = this.cleanInput(input);
            
            // First try to extract from URL
            const urlResult = this.extractFromURL(cleanInput);
            if (urlResult) {
                return urlResult;
            }
            
            // Search in database
            const result = this.searchCompany(cleanInput);
            if (result) {
                return {
                    verified: true,
                    is_real: true,
                    company_name: result.company_name,
                    industry: result.industry,
                    location: result.location,
                    description: result.description,
                    founded_year: result.founded_year,
                    employee_count: result.employee_count,
                    domain: result.domain,
                    website: result.website,
                    logo: result.logo,
                    trust_score: result.trust_score,
                    verification_method: 'Local Database',
                    confidence: 'High',
                    sources: ['Local Database'],
                    sources_checked: 1,
                    verification_summary: `Company found in trusted database with ${result.trust_score}% trust score`
                };
            }
            
            // Try domain analysis for unknown companies
            const domainResult = this.analyzeDomain(cleanInput);
            if (domainResult) {
                return domainResult;
            }
            
            // Return not found
            return {
                verified: false,
                is_real: false,
                company_name: cleanInput,
                industry: this.detectIndustryFromName(cleanInput),
                location: 'Unknown',
                description: 'Company not found in database. Basic domain analysis performed.',
                founded_year: 'Unknown',
                employee_count: 'Unknown',
                domain: cleanInput,
                website: cleanInput.startsWith('http') ? cleanInput : `https://${cleanInput}`,
                logo: this.getIndustryLogo(this.detectIndustryFromName(cleanInput)),
                trust_score: 20,
                verification_method: 'Domain Analysis',
                confidence: 'Low',
                sources: ['Domain Analysis'],
                sources_checked: 1,
                verification_summary: 'Unknown company. Domain analysis performed for basic information.'
            };
            
        } catch (error) {
            return {
                verified: false,
                is_real: false,
                company_name: input,
                industry: 'Error',
                location: 'Error',
                description: 'Error verifying company: ' + error.message,
                founded_year: 'Unknown',
                employee_count: 'Unknown',
                domain: 'Unknown',
                website: 'Unknown',
                logo: '❌',
                trust_score: 0,
                verification_method: 'Error',
                confidence: 'Low',
                sources: ['Error'],
                sources_checked: 0,
                verification_summary: 'Verification failed due to error'
            };
        }
    }

    analyzeDomain(input) {
        try {
            let url = input;
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            
            const urlObj = new URL(url);
            const domain = urlObj.hostname.toLowerCase();
            
            // Remove www prefix
            const cleanDomain = domain.replace(/^www\./, '');
            
            // Extract domain parts
            const domainParts = cleanDomain.split('.');
            const tld = domainParts[domainParts.length - 1];
            
            // Check if it's a valid domain
            if (this.isValidDomain(cleanDomain)) {
                const companyInfo = {
                    domain: cleanDomain,
                    tld: tld,
                    subdomain: domainParts.length > 2 ? domainParts[0] : null,
                    has_www: domain.startsWith('www.'),
                    is_ip_address: /^(\d{1,3}\.){3}\d{1,3}$/.test(domain),
                    url: url
                };
                
                // Analyze domain for company information
                const analysis = this.analyzeDomainForCompany(companyInfo);
                
                return {
                    verified: true,
                    is_real: analysis.confidence > 30,
                    company_name: analysis.company_name,
                    industry: analysis.industry,
                    location: analysis.location,
                    description: analysis.description,
                    founded_year: analysis.founded_year,
                    employee_count: analysis.employee_count,
                    domain: companyInfo.domain,
                    website: companyInfo.url,
                    logo: analysis.logo,
                    trust_score: analysis.trust_score,
                    verification_method: 'Domain Analysis',
                    confidence: analysis.confidence,
                    sources: ['Domain Analysis'],
                    sources_checked: 1,
                    verification_summary: analysis.summary
                };
            }
            
            return null;
        } catch (error) {
            return null;
        }
    }

    isValidDomain(domain) {
        // Basic domain validation
        const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z]{2,})+$/;
        return domainRegex.test(domain);
    }

    analyzeDomainForCompany(domainInfo) {
        const domain = domainInfo.domain;
        const tld = domainInfo.tld;
        
        // Known startup TLDs and patterns
        const startupTlds = ['.io', '.ai', '.tech', '.app', '.dev', '.co', '.me', '.ly', '.vc', '.cc', '.tv', '.fm', '.im', '.ws'];
        
        const startupKeywords = [
            'tech', 'app', 'digital', 'online', 'cloud', 'data', 'software', 'web',
            'mobile', 'platform', 'service', 'solution', 'systems', 'lab',
            'studio', 'works', 'network', 'media', 'interactive', 'smart'
        ];
        
        let companyName = this.generateCompanyNameFromDomain(domain);
        let industry = 'Technology';
        let location = 'Unknown';
        let description = `Online platform or service operating on ${domain}`;
        let foundedYear = this.estimateFoundedYear(domain);
        let employeeCount = this.estimateEmployeeCount(domain);
        let trustScore = 25;
        let confidence = 40;
        let logo = '🚀';
        
        // Analyze domain for clues
        const domainLower = domain.toLowerCase();
        
        // Check TLD for industry clues
        if (startupTlds.includes('.' + tld)) {
            trustScore += 10;
            confidence += 10;
        }
        
        // Check domain keywords for industry
        for (const keyword of startupKeywords) {
            if (domainLower.includes(keyword)) {
                trustScore += 5;
                confidence += 5;
                break;
            }
        }
        
        // Special domain analysis
        if (domainLower.includes('startup')) {
            industry = 'Startup';
            trustScore += 15;
            confidence += 20;
            logo = '🚀';
        } else if (domainLower.includes('tech')) {
            industry = 'Technology';
            trustScore += 10;
            confidence += 10;
            logo = '💻';
        } else if (domainLower.includes('app')) {
            industry = 'Software';
            trustScore += 10;
            confidence += 10;
            logo = '📱';
        } else if (domainLower.includes('shop') || domainLower.includes('store')) {
            industry = 'E-commerce';
            trustScore += 10;
            confidence += 10;
            logo = '🛒';
        } else if (domainLower.includes('media') || domainLower.includes('news')) {
            industry = 'Media';
            trustScore += 10;
            confidence += 10;
            logo = '📰';
        } else if (domainLower.includes('finance') || domainLower.includes('bank')) {
            industry = 'Finance';
            trustScore += 10;
            confidence += 10;
            logo = '💰';
        } else if (domainLower.includes('health') || domainLower.includes('med')) {
            industry = 'Healthcare';
            trustScore += 10;
            confidence += 10;
            logo = '🏥';
        } else if (domainLower.includes('edu') || domainLower.includes('learn')) {
            industry = 'Education';
            trustScore += 10;
            confidence += 10;
            logo = '🎓';
        }
        
        // Try to guess location from TLD
        const locationGuess = this.guessLocationFromTLD(tld);
        if (locationGuess) {
            location = locationGuess;
            confidence += 5;
        }
        
        // Adjust company name
        companyName = this.formatCompanyName(companyName);
        
        // Generate description
        description = `${companyName} is ${this.getArticle(industry)} ${industry.toLowerCase()} company based in ${location}. ${this.generateDescription(industry, domain)}`;
        
        return {
            company_name: companyName,
            industry: industry,
            location: location,
            description: description,
            founded_year: foundedYear,
            employee_count: employee_count,
            trust_score: Math.min(100, trustScore),
            confidence: confidence,
            logo: logo,
            summary: `${companyName} - ${industry} company in ${location}. Domain: ${domain}. Trust Score: ${Math.min(100, trust_score)}/100.`
        };
    }

    generateCompanyNameFromDomain(domain) {
        const domainParts = domain.split('.')[0];
        
        // Remove common prefixes and suffixes
        let name = domainParts
            .replace(/^(the|my|our|your|get|go|we|best|top|pro|plus|new|all|any|one|first|last|main|official|site|web|online|digital)/i, '')
            .replace(/(app|tech|lab|works|studio|media|network|systems|solutions|services|platform|digital|interactive|smart|global|world|online|store|shop|market|place|center|hub|zone|space|connect|link|net|org|com|co|io|ai|tech|app|dev|me|ly|vc|cc|tv|fm|im|ws)/g, '');
        
        // Capitalize first letter of each word
        name = name.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ');
        
        return name || 'Unknown Company';
    }

    formatCompanyName(name) {
        if (!name || name === 'Unknown Company') {
            return 'Unknown Company';
        }
        
        // Capitalize properly
        return name.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ');
    }

    detectIndustryFromName(name) {
        const nameLower = name.toLowerCase();
        
        const industries = {
            'technology': ['tech', 'software', 'app', 'digital', 'computer', 'programming', 'code', 'dev', 'data', 'cloud', 'web', 'online', 'platform', 'system', 'network', 'internet', 'cyber', 'security', 'ai', 'ml', 'automation'],
            'e-commerce': ['shop', 'store', 'market', 'sell', 'buy', 'retail', 'commerce', 'shopping', 'cart', 'payment', 'checkout', 'order', 'delivery', 'logistics'],
            'social media': ['social', 'media', 'network', 'connect', 'share', 'community', 'platform', 'chat', 'messaging', 'blog', 'forum', 'review', 'rating'],
            'finance': ['bank', 'finance', 'financial', 'money', 'payment', 'invest', 'trading', 'crypto', 'bitcoin', 'blockchain', 'insurance', 'loan', 'credit', 'cash'],
            'healthcare': ['health', 'medical', 'hospital', 'clinic', 'pharmacy', 'medicine', 'doctor', 'patient', 'treatment', 'care'],
            'education': ['education', 'school', 'university', 'college', 'learn', 'study', 'course', 'training', 'academy', 'student', 'teacher'],
            'entertainment': ['entertainment', 'media', 'movie', 'music', 'game', 'gaming', 'video', 'streaming', 'content', 'play', 'fun'],
            'automotive': ['car', 'auto', 'vehicle', 'transport', 'transportation', 'mobility', 'drive', 'ride', 'delivery', 'logistics'],
            'food': ['food', 'restaurant', 'cooking', 'kitchen', 'meal', 'dining', 'catering', 'recipe', 'menu'],
            'travel': ['travel', 'tourism', 'hotel', 'booking', 'vacation', 'trip', 'flight', 'airline', 'cruise']
        };
        
        for (const [industry, keywords] of Object.entries(industries)) {
            for (const keyword of keywords) {
                if (nameLower.includes(keyword)) {
                    return industry.charAt(0).toUpperCase() + industry.slice(1);
                }
            }
        }
        
        return 'Unknown';
    }

    getIndustryLogo(industry) {
        const logos = {
            'Technology': '💻',
            'E-commerce': '🛒',
            'Social Media': '📱',
            'Finance': '💳',
            'Healthcare': '🏥',
            'Education': '🎓',
            'Entertainment': '🎬',
            'Automotive': '🚗',
            'Transportation': '🚕',
            'Food': '🍕',
            'Travel': '✈️',
            'Unknown': '🏢'
        };
        return logos[industry] || '🏢';
    }

    getArticle(industry) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        const firstLetter = industry.charAt(0).toLowerCase();
        return vowels.includes(firstLetter) ? 'an' : 'a';
    }

    generateDescription(industry, domain) {
        const descriptions = {
            'Technology': 'providing innovative software solutions and digital services',
            'E-commerce': 'offering online shopping and digital commerce solutions',
            'Social Media': 'connecting people and facilitating online communication',
            'Finance': 'providing financial services and digital payment solutions',
            'Healthcare': 'delivering medical services and healthcare solutions',
            'Education': 'offering educational services and learning platforms',
            'Entertainment': 'creating and distributing entertainment content and media',
            'Automotive': 'manufacturing vehicles and providing transportation solutions',
            'Transportation': 'offering transportation and logistics services',
            'Food': 'providing food services and culinary experiences',
            'Travel': 'offering travel services and hospitality solutions'
        };
        
        return descriptions[industry] || 'providing professional services and solutions';
    }

    estimateFoundedYear(domain) {
        // Try to extract year from domain
        const yearMatch = domain.match(/\d{4}/);
        if (yearMatch) {
            const year = parseInt(yearMatch[0]);
            if (year >= 1990 && year <= new Date().getFullYear()) {
                return year;
            }
        }
        
        // Estimate based on domain age (simplified)
        const currentYear = new Date().getFullYear();
        const estimatedYear = currentYear - Math.floor(Math.random() * 15) - 5;
        return estimatedYear;
    }

    estimateEmployeeCount(domain) {
        // Simplified employee count estimation based on domain characteristics
        const domainLower = domain.toLowerCase();
        
        if (domainLower.includes('corp') || domainLower.includes('inc') || domainLower.includes('llc')) {
            return '1000+';
        } else if (domainLower.includes('group') || domainLower.includes('international')) {
            return '500+';
        } else if (domainLower.includes('global') || domainLower.includes('worldwide')) {
            return '100+';
        } else {
            return '10-50';
        }
    }

    guessLocationFromTLD(tld) {
        const tldLocations = {
            'in': 'India',
            'uk': 'United Kingdom',
            'ca': 'Canada',
            'au': 'Australia',
            'de': 'Germany',
            'fr': 'France',
            'jp': 'Japan',
            'cn': 'China',
            'sg': 'Singapore',
            'ae': 'United Arab Emirates',
            'sa': 'Saudi Arabia',
            'za': 'South Africa',
            'br': 'Brazil',
            'mx': 'Mexico',
            'es': 'Spain',
            'it': 'Italy',
            'nl': 'Netherlands',
            'se': 'Sweden',
            'no': 'Norway',
            'dk': 'Denmark',
            'fi': 'Finland',
            'ch': 'Switzerland',
            'at': 'Austria',
            'be': 'Belgium',
            'ie': 'Ireland',
            'nz': 'New Zealand'
        };
        
        return tldLocations[tld] || 'Unknown';
    }

    cleanInput(input) {
        return input.trim().toLowerCase();
    }

    searchCompany(input) {
        // Direct match
        if (this.companies[input]) {
            return this.companies[input];
        }
        
        // Partial match
        for (const [key, company] of Object.entries(this.companies)) {
            if (key.includes(input) || input.includes(key)) {
                return company;
            }
            if (company.company_name.toLowerCase().includes(input) || 
                input.includes(company.company_name.toLowerCase())) {
                return company;
            }
        }
        
        // Domain match
        for (const [key, company] of Object.entries(this.companies)) {
            if (company.domain && company.domain.toLowerCase().includes(input)) {
                return company;
            }
        }
        
        return null;
    }

    extractFromURL(input) {
        try {
            let url = input;
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            
            const urlObj = new URL(url);
            const domain = urlObj.hostname.toLowerCase();
            
            // Remove www prefix
            const cleanDomain = domain.replace(/^www\./, '');
            
            // Search by domain
            for (const [key, company] of Object.entries(this.companies)) {
                if (company.domain === cleanDomain || cleanDomain.includes(company.domain)) {
                    return {
                        verified: true,
                        is_real: true,
                        company_name: company.company_name,
                        industry: company.industry,
                        location: company.location,
                        description: company.description,
                        founded_year: company.founded_year,
                        employee_count: company.employee_count,
                        domain: company.domain,
                        website: company.website,
                        logo: company.logo,
                        trust_score: company.trust_score - 10, // Lower trust for URL-only verification
                        verification_method: 'URL Analysis',
                        confidence: 'Medium',
                        sources: ['URL Analysis'],
                        sources_checked: 1,
                        verification_summary: `Company identified from URL: ${url}`
                    };
                }
            }
            
            return null;
        } catch (error) {
            return null;
        }
    }

    getIndustryLogo(industry) {
        const logos = {
            'Technology': '💻',
            'Social Media': '📱',
            'E-commerce': '🛒',
            'Entertainment': '🎬',
            'Software': '⚙️',
            'Automotive': '🚗',
            'Finance': '💳',
            'Transportation': '🚕',
            'Hospitality': '🏨',
            'Unknown': '❓'
        };
        return logos[industry] || '🏢';
    }
}

// Export for use in HTML
window.CompanyVerifier = CompanyVerifier;
