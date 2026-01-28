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
            } else {
                // Try to extract from URL
                const urlResult = this.extractFromURL(cleanInput);
                if (urlResult) {
                    return urlResult;
                }
                
                // Return not found
                return {
                    verified: false,
                    is_real: false,
                    company_name: cleanInput,
                    industry: 'Unknown',
                    location: 'Unknown',
                    description: 'Company not found in database',
                    founded_year: 'Unknown',
                    employee_count: 'Unknown',
                    domain: 'Unknown',
                    website: 'Unknown',
                    logo: '❓',
                    trust_score: 0,
                    verification_method: 'Not Found',
                    confidence: 'Low',
                    sources: ['Database Search'],
                    sources_checked: 1,
                    verification_summary: 'Company not found in trusted database'
                };
            }
            
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
