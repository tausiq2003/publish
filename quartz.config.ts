import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
    configuration: {
        pageTitle: "🧠 Tausiq's Thoughts",
        pageTitleSuffix: "",
        enableSPA: true,
        enablePopovers: true,
        analytics: {
            provider: "google",
            tagId: "G-TKBX4DN30Y",
        },
        locale: "en-US",
        baseUrl: "publish.tausiqsama.me",
        ignorePatterns: ["private", "templates", ".obsidian"],
        defaultDateType: "created",
        generateSocialImages: false,
        theme: {
            fontOrigin: "googleFonts",
            cdnCaching: true,
            typography: {
                header: "Roboto",
                body: "Inter",
                code: "IBM Plex Mono",
            },
            colors: {
                lightMode: {
                    light: "#f5f5f5",
                    lightgray: "#e5e5e5",
                    gray: "#b8b8b8",
                    darkgray: "#1a1a28",
                    dark: "#387ae6",
                    secondary: "#7e22ce",
                    tertiary: "#c084fc",
                    highlight: "rgba(143, 159, 169, 0.15)",
                    textHighlight: "#fff23688",
                },
                darkMode: {
                    light: "#1a1a28",
                    lightgray: "#393639",
                    gray: "#646464",
                    darkgray: "#f5f5f5",
                    dark: "#387ae6",
                    secondary: "#c084fc",
                    tertiary: "#7E22CE",
                    highlight: "rgba(143, 159, 169, 0.15)",
                    textHighlight: "#b3aa0288",
                },
            },
        },
    },
    plugins: {
        transformers: [
            Plugin.FrontMatter(),
            Plugin.CreatedModifiedDate({
                priority: ["frontmatter", "filesystem"],
            }),
            Plugin.SyntaxHighlighting({
                theme: {
                    light: "github-light",
                    dark: "github-dark",
                },
                keepBackground: false,
            }),
            Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
            Plugin.GitHubFlavoredMarkdown(),
            Plugin.TableOfContents(),
            Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
            Plugin.Description(),
            Plugin.Latex({ renderEngine: "katex" }),
        ],
        filters: [Plugin.RemoveDrafts()],
        emitters: [
            Plugin.AliasRedirects(),
            Plugin.ComponentResources(),
            Plugin.ContentPage(),
            Plugin.FolderPage(),
            Plugin.TagPage(),
            Plugin.ContentIndex({
                enableSiteMap: true,
                enableRSS: true,
                rssLimit: 20,
            }),
            Plugin.Assets(),
            Plugin.Static(),
            Plugin.NotFoundPage(),
        ],
    },
}

export default config
