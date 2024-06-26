'use strict';

module.exports = function (environment) {
    let ENV = {
        modulePrefix: 'euprostir',
        environment,
        rootURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            },
            EXTEND_PROTOTYPES: {
                // Prevent Ember Data from overriding Date.parse.
                Date: false
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        },

        api: {
            host: 'https://www.livarava.com',
            path: '/api/v2',
            key: '2359a4d8-d8e5-45a7-8878-d9f8eb9637b4'
        },

        i18n: {
            defaultLocale: 'uk',
            allowedLocales: ['uk', 'en']
        },

        neuronet: {
            site: 131961,
            uk: {
                war: {
                    news: '179845',
                    stories: '179902',
                    opportunities: '184445',
                },
                stories: '131968',
                practices: '131972',
                opportunities: '131974',
                courses: '134733',
                events: '131961',
                resources: '136375',
                about: '132034',
                filters: {
                    search: [
                        {
                            name: 'Історії',
                            lira: '131968',
                            endpoint: 'stories.item',
                            model: 'post',
                        }, {
                            name: 'Практики',
                            lira: '131972',
                            endpoint: 'practices.item',
                            model: 'post',
                        }, {
                            name: 'Можливості',
                            lira: '131974',
                            endpoint: 'opportunities.item',
                            model: 'post',
                        }, {
                            name: 'Курси',
                            lira: '136412',
                            endpoint: 'courses.item',
                            model: 'post',
                        }, {
                            name: 'Події',
                            lira: '131961',
                            endpoint: 'events.item',
                            model: 'event',
                        }, {
                            name: 'Ресурси',
                            lira: '136375',
                            endpoint: 'resources.item',
                            model: 'post',
                        }
                    ],
                    stories: [
                        {
                            name: 'Відновлення України',
                            lira: '211980',
                        }, {
                            name: 'Успішні проекти',
                            lira: '133742',
                        }, {
                            name: 'Візії розвитку громадянського суспільства',
                            lira: '133129',
                        }, {
                            name: 'Соціальне підприємництво',
                            lira: '38405',
                        }, {
                            name: 'Соціальні послуги',
                            lira: '133132',
                        }, {
                            name: 'Управління організаціями',
                            lira: '133134',
                        }, {
                            name: 'Ефективні комунікації',
                            lira: '133136',
                        }, {
                            name: 'Війна в Україні',
                            lira: '179902',
                        }
                    ],
                    practices: [
                        {
                            name: 'Соціальне підприємництво',
                            lira: '38405',
                        }, {
                            name: 'Соціальні послуги',
                            lira: '133132',
                        }, {
                            name: 'Управління організаціями',
                            lira: '133134',
                        }, {
                            name: 'Ефективні комунікації',
                            lira: '133136',
                        }
                    ],
                    opportunities: [
                        {
                            name: 'Візії розвитку громадянського суспільства',
                            lira: '133129',
                        }, {
                            name: 'Соціальне підприємництво',
                            lira: '38405',
                        }, {
                            name: 'Соціальні послуги',
                            lira: '133132',
                        }, {
                            name: 'Управління організаціями',
                            lira: '133134',
                        }, {
                            name: 'Ефективні комунікації',
                            lira: '133136',
                        }
                    ],
                    courses: [
                        {
                            name: 'Онлайн курси',
                            lira: '136412',
                        }, {
                            name: 'Відео',
                            lira: '142442',
                        }
                    ],
                    events: [
                        {
                            name: 'Візії розвитку громадянського суспільства',
                            value: '133129',
                        }, {
                            name: 'Соціальне підприємництво',
                            value: '38405',
                        }, {
                            name: 'Соціальні послуги',
                            value: '133132',
                        }, {
                            name: 'Управління організаціями',
                            value: '133134',
                        }, {
                            name: 'Ефективні комунікації',
                            value: '133136',
                        }
                    ],
                    resources: {
                        subjects: [
                            { value: '133129', name: 'Візії розвитку громадянського суспільства', },
                            { value: '38405', name: 'Соціальне підприємництво', },
                            { value: '133132', name: 'Соціальні послуги', },
                            { value: '133134', name: 'Управління організаціями', },
                            { value: '133136', name: 'Ефективні комунікації', },
                            { value: '137299', name: 'Інновації', },
                        ],
                        types: [
                            { value: '136405', name: 'Посібники', },
                            { value: '136407', name: 'Дослідження', },
                            { value: '137301', name: 'Інструменти', },
                            { value: '13422', name: 'Політики', },
                            { value: '136412', name: 'Онлайн курси', }
                        ],
                    },
                },

            },
            en: {
                stories: '133614',
                practices: '133616',
                filters: {
                    stories: [
                        {
                            name: 'Successful projects',
                            lira: '133745',
                        },
                        {
                            name: 'Vision of civil society',
                            lira: '133603',
                        }, {
                            name: 'Social entrepreneurship',
                            lira: '133605',
                        }, {
                            name: 'Management of CSOs',
                            lira: '133609',
                        }
                    ],
                    practices: [
                        {
                            name: 'Social entrepreneurship',
                            lira: '133605',
                        }, {
                            name: 'Management of CSOs',
                            lira: '133609',
                        }, {
                            name: 'Effective communication',
                            lira: '133611',
                        }
                    ],
                }
            },
        },

        pageTitle: {
            replace: true
        },

        googleAnalytics: {
            webPropertyId: '',
        },

        'ember-cli-head': {
            suppressBrowserRender: true
        },

        moment: {
            includeLocales: true
        },

        metricsAdapters: [
            {
                name: 'GoogleAnalytics',
                environments: ['local', 'master', 'development', 'production'],
                config: {
                    id: 'UA-63942379-2',
                }
            }, {
                name: 'GoogleTagManager',
                environments: ['local', 'master', 'development', 'production'],
                config: {
                    id: 'GTM-PPQD967',
                }
            }, {
                name: 'FacebookPixel',
                environments: ['local', 'master', 'development', 'production'],
                config: {
                    id: '298724054314874'
                }
            }
        ],
    };

    if (environment === 'local') {
        ENV.api = {
            host: 'http://local.livarava.com',
            path: '/api/v2',
            key: 'db459552-f2c6-49b0-b160-a28d5d05936a'
        };
    }

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
        ENV.APP.autoboot = false;
    }

    if (environment === 'production') {
        // here you can enable a production-specific feature
    }

    return ENV;
};
