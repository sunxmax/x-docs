import { defineConfig } from 'vitepress'
import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss'
import mathjax3 from 'markdown-it-mathjax3';

const RSS: RSSOptions = {
    title: 'ZERO',
    baseUrl: 'https://zero-docs.vercel.app',
    copyright: 'Copyright (c) 2021-present, ZERO',
    description: 'feedId:67840654578173952+userId:67737338736758784'
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "ZERO",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Sans+SC:wght@100..900&display=swap'
        }],
        ["script", { src: "/_vercel/insights/script.js" }],
        ["script", { src: "/_vercel/speed-insights/script.js" }],
    ],
    // <link href="https://fonts.cdnfonts.com/css/jetbrains-mono" rel="stylesheet">
    description: "记录与分享",
    lastUpdated: true,

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg',
        siteTitle: 'ZERO',
        nav: [
            { text: '首页', link: '/' },
            { text: '拾遗', link: '/docs/keep/', activeMatch: '/docs/keep/' },
            { text: '时光', link: '/docs/timeline/', activeMatch: '/docs/timeline/' },
        ],

        sidebar: {
            '/docs/keep/': [
                {
                    text: 'AI', collapsed: true,
                    items: [
                        { text: 'OpenAI', link: '/docs/ai' },
                    ]
                },
                {
                    text: '数据库',
                    collapsed: true,
                    items: [
                        {
                            text: '关系型',
                            items: [
                                { text: 'MySQL', link: '/docs/database/RDBMS/MySQL' },
                                { text: 'Oracle', link: '/docs/database/RDBMS/Oracle' },
                                { text: 'PostgreSQL', link: '/docs/database/RDBMS/PostgreSQL' },
                                { text: 'SQLite', link: '/docs/database/RDBMS/SQLite' },
                                { text: 'SQL Server', link: '/docs/database/RDBMS/SQL Server' },
                                { text: 'MariaDB', link: '/docs/database/RDBMS/MariaDB' },
                            ]
                        },
                        {
                            text: '非关系型',
                            items: [
                                { text: 'Redis', link: '/docs/database/NoSQL/Redis' },
                                { text: 'MongoDB', link: '/docs/database/NoSQL/MongoDB' },
                                { text: 'Elasticsearch', link: '/docs/database/NoSQL/Elasticsearch' },
                            ]
                        },
                    ]
                },
                {
                    text: '开发语言',
                    collapsed: true,
                    items: [
                        { text: 'Java', link: '/docs/language/Java' },
                        { text: 'Python', link: '/docs/language/Python' },
                    ]
                },
                {
                    text: '消息队列',
                    collapsed: true,
                    items: [
                        { text: 'Kafka', link: '/docs/mq/kafka' },
                    ]
                },
                {
                    text: '其他',
                    collapsed: true,
                    items: [
                        { text: 'Git', link: '/step/tool/Git' },
                        { text: 'Nginx', link: '/step/tool/Nginx' },
                        { text: 'Maven', link: '/step/tool/Maven' },
                        { text: 'Docker', link: '/step/tool/Docker' },
                        { text: 'Arthas', link: '/step/tool/Arthas' },
                        { text: 'FFmpeg', link: '/step/tool/FFmpeg' },
                        { text: 'YT-DLP', link: '/step/tool/YT-DLP' },
                        { text: 'Homebrew', link: '/step/tool/Homebrew' },
                        { text: 'NVM/Volta', link: '/step/tool/NVM-Volta' },
                        { text: 'WordPress', link: '/step/tool/WordPress' },
                    ]
                },
            ],
            '/docs/timeline/': [
                {
                    text: '时间线',
                    collapsed: true,
                    items: [
                        { text: '总结', link: '/docs/timeline/summary' },
                    ]
                },
            ]
        },

        lastUpdated: {
            text: '最后更新于'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/sunxmax' }
        ],

        // editLinks: true, 
        editLink: {
            pattern: 'https://github.com/sunxmax/zero-docs/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航',
            level: [2, 3]
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2021-present zero'
        },

        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {  //这里是个大坑，zh是不生效的，改为root即可
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    markdown: {
        math: true, // 启用数学公式支持
        config: (md) => {
            md.use(mathjax3); // 注册 markdown-it-mathjax3 插件
        },
    },

    vite: {
        plugins: [
            RssPlugin(RSS)
        ]
    }
})
