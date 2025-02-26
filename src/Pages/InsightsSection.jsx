import React, { useState } from "react";
import { BookOpen, Send, Volume2, Search } from "lucide-react"; // Import Lucide icons
import "../components/CSS/InsightsSection.css";

const InsightsSection = () => {
  const [activeTab, setActiveTab] = useState("Publications");
  const [currentPages, setCurrentPages] = useState({
    Publications: 1,
    "Working Papers": 1,
    Talks: 1,
    Search: 1,
  });

  const insightsData = [
    {
      author: "Liuren Wu and Yuachao Zhang",
      title:
        "Common Pricing of Decentralized Risk: A Linear Option Pricing Model",
      journal: "Review of Financial Studies,  forthcoming.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4248508",
    },
    {
      author: "Meng Tian and Liuren Wu",
      title: "Cross-sectional Variation of Option Implied Volatility Skew",
      journal: "Management Science, 2024, 70(6),",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3707006",
    },
    {
      author: "Meng Tian and Liuren Wu",
      title:
        "Limits of Arbitrage and Primary Risk Taking in Derivative Securities",
      journal: "Review of Asset Pricing Studies, 2023, 13(3),",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3779350",
    },
    {
      author: "Peter Carr and Liuren Wu",
      title: "Decomposing Long Bond Returns: A Decentralized Theory",
      journal: "Review of Finance, 2023, 27(3),",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3430004",
    },
    {
      author: "Liuren Wu",
      title: "Centrality of the Supply-Chain Network",
      journal:
        "Annual Reviews In Modern Quantitative Finance, Eds. Andrey Itkin, 2023, Volume 1.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2651786",
    },
    {
      author: "Francisco Paneranda and Liuren Wu",
      title: "Targets, Predictability, and Performance",
      journal: "Management Science, 2022, 68(2), ",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3728974",
    },
    {
      author: "Peter Carr, Liuren Wu, and Yuzhao Zhang",
      title:
        "Probabilistic Interpretation of Black Implied Volatility, Options - 45 Years Since the Publication of the Black-Scholes-Merton Model",
      journal: "World Scientific, 2022.",
    },
    {
      author: "Peter Carr and Liuren Wu",
      title: "Option Profit and Loss Attribution and Pricing: A New Framework",
      journal: "Journal of Finance, 2020, 75(4),",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3148796",
    },
    {
      author: "Malick Sy and Liuren Wu",
      title: "The Shale Revolution and Shifting Crude Dynamics",
      journal: "Journal of Applied Econometrics, 2020, 35(2),",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2992372",
    },
    {
      author: "Peter Carr, Liuren Wu, and Zhibai Zhang",
      title: "Using Machine Learning to Predict Realized Variance",
      journal: "Journal of Investment Management, 2020, 18(2), ",
    },
    {
      author: "Jian Hua and Liuren Wu",
      title:
        "Monetary Policy Rule as a Bridge: Predicting Inflation without Predictive Regressions",
      journal: "Journal of Financial and Quantitative Analysis, 2018, 53(6),",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2407256",
    },
    {
      author: "Liuren Wu",
      title: "Estimating Risk-Return Relations with Analysts Price Targets",
      journal: "Journal of Banking and Finance, 2018",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3198431",
    },
    {
      author: "Laurent E. Calvet, Adlai J. Fisher, and Liuren Wu",
      title:
        "Staying on Top of the Curve: A Cascade Model of the Term Structure Dynamics",
      journal: "Journal of Financial and Quantitative Analysis, 2018, 53(2),",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1573392",
    },
    // Adding additional publications from provided list
    {
      author: "Peter Carr and Liuren Wu",
      title:
        "Leverage Effect, Volatility Feedback, and Self-Exciting Market Disruptions",
      journal:
        "Journal of Financial and Quantitative Analysis, 2017, 52(5), 2119--2156.",
      link: "https://www.dropbox.com/scl/fi/ds6s3owyhdhmfbvamciha/CarrWuJFQA2017.pdf?rlkey=iudyjkokhiarumf42vrio6n9o&e=1&dl=0",
    },
    {
      author: "Liuren Wu and Jingyi Zhu",
      title: "Simple Robust Hedging With Nearby Contracts",
      journal: "Journal of Financial Econometrics, 2016, 15(1), 1--35.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1701696",
    },
    {
      author: "Jennie Bai and Liuren Wu",
      title: "Anchoring Corporate Credit Swap Spreads to Firm Fundamentals",
      journal:
        "Journal of Financial and Quantitative Analysis, 2016, 51(5), 1521--1543.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2020841",
    },
    {
      author: "Peter Carr and Liuren Wu",
      title:
        "Analyzing Volatility Risk and Risk Premium in Option Contracts: A New Theory",
      journal: "Journal of Financial Economics, 2016, 120(1), 1--20.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1701685",
    },
    {
      author: "Suparna Chakraborty, Yi Tang, and Liuren Wu",
      title: "Imports, Exports, Dollar Exposures, and Stock Returns",
      journal: "Open Economic Review, 2015, 26(5), 1059--1079.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1108002",
    },
    {
      author: "Peter Carr and Liuren Wu",
      title: "Static Hedging of Standard Options",
      journal: "Journal of Financial Econometrics, 2014, 12(1), 3--46.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=585451",
    },
    {
      author: "Richard Holowczak, Jianfeng Hu, and Liuren Wu",
      title: "Aggregating Information in Option Transactions,",
      journal: "Journal of Derivatives, 2014, 21(3)",
      link: "https://www.dropbox.com/scl/fi/abwfpmane2g45o23p4ryu/HolowczakHuWuJOD2014.pdf?rlkey=84f9l6vuyc5w0dthuma9wxrvx&e=1&dl=0",
    },
    {
      author: "Robert Schwartz and Liuren Wu",
      title: "Equity Trading in the Fast Lane: The Staccato Alternative",
      journal: "Journal of Portfolio Management, 2013, 39(3), 3--6.",
    },
    {
      author: "Ren-raw Chen, Xiaolin Cheng, and Liuren Wu",
      title:
        "Dynamic Interactions Between Interest-Rate and Credit Risk: Theory and Evidence on the Credit Default Swap Term Structure",
      journal: "Review of Finance, 2013, 17(1)",
      link: "https://www.dropbox.com/scl/fi/zw72cz9sa679hxb3mijbm/ChenChengWuRoF2011.pdf?rlkey=cvfol086bbool64m2acforw74&e=1&dl=0",
    },
    {
      author: "Peter Carr, Roger Lee, and Liuren Wu",
      title: "Variance Swaps on Time-Changed Levy Processes",
      journal: "Finance and Stochastics, 2012, 16(2), 335--355.",
    },
    {
      author: "Peter Carr and Liuren Wu",
      title: "A Simple Robust Link Between American Puts and Credit Protection",
      journal: "Review of Financial Studies, 2011, 24(2), 473--505.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1306474",
    },
    {
      author: "James R. Lothian and Liuren Wu",
      title: "Uncovered Interest-Rate Parity Over the Past Two Centuries",
      journal:
        "Journal of International Money and Finance, 2011, 30(3), 448--473.",
      link: "https://www.dropbox.com/scl/fi/m8uk717zb42hld884uu03/LothianWu2010.pdf?rlkey=r7vt7prixjvo49cfo1pz35r0w&e=1&dl=0",
    },
    {
      author: "Liuren Wu",
      title:
        "Variance Dynamics: Joint Evidence from Options and High-Frequency Returns",
      journal: "Journal of Econometrics, 2011, 160(1), 280--287.",
      link: "https://www.dropbox.com/scl/fi/abvmu34xn6zhxopsfn1t4/WUJE2011.pdf?rlkey=p57j5waq990161hjibfxy49iv&e=1&dl=0",
    },
    {
      author: "Gurdip Bakshi and Liuren Wu",
      title:
        "The Behavior of Risk and Market Prices of Risk over the Nasdaq Bubble Period",
      journal: "Management Science, 2010, 56(12), 2251--2264.",
      link: "https://www.dropbox.com/scl/fi/dxd3whhv4fqh3652ykub9/BakshiWu_MS2010.pdf?rlkey=vo1jfp5xyzzzdygx1wjdyfvy3&e=1&dl=0",
    },
    {
      author: "Daniel Egloff, Markus Leippold, and Liuren Wu",
      title:
        "The Term Structure of Variance Swap Rates and Optimal Variance Swap Investments",
      journal: "Journal of Financial and Quantitative Analysis, 2010, 45(5)",
      link: "https://www.dropbox.com/scl/fi/yntsyibgypzudn1tgnll3/EgloffLeippoldWuJFQA2010.pdf?rlkey=dp84ogc6iczfui08ffr1aaz2y&e=1&dl=0",
    },
    {
      author: "Peter Carr, and Liuren Wu",
      title:
        "Stock Options and Credit Default Swaps: A Joint Framework for Valuation and Estimation",
      journal: "Journal of Financial Econometrics, 2010, 8(4)",
      link: "https://www.dropbox.com/scl/fi/n89v04poghjb4l579nuaf/CarrWuJFEC2009.pdf?rlkey=3vpwq66vvyujdt4bz71xgodqt&e=1&dl=0",
    },
    {
      author: "Turan Bali and Liuren Wu",
      title:
        "The Role of Exchange Rates in Intertemporal Risk-Return Relations",
      journal:
        "Journal of International Money and Finance, 2010, 29(8), 1670--1686.",
      link: "https://www.dropbox.com/scl/fi/9wpqqskiqof9kg29yoc3f/BaliWuJIMF2010.pdf?rlkey=g5msvlmzuemxq5nz9owqlbmfq&e=1&dl=0",
    },
    {
      author: "Massoud Heidari and Liuren Wu",
      title:
        "Market Anticipation of Fed Policy Changes and the Term Structure of Interest Rates",
      journal: "Review of Finance, 2010, 14(2), 313-342.",
      link: "https://www.dropbox.com/scl/fi/n0w8fwf3rvzsagizjfo3a/HeidariWu_RoF2010.pdf?rlkey=qpxdj8kmxienfo3mc8nv9bq8v&e=1&dl=0",
    },
    {
      author: "Turan Bali, Massoud Heidari, and Liuren Wu",
      title: "Predictability of Interest Rates and Interest-Rate Portfolios",
      journal:
        "Journal of Business and Economic Statistics, 2009, 27(4), 517-527.",
      link: "https://www.dropbox.com/scl/fi/h7tjvdszhbffj6krxd5pe/BaliHeidariWuJBES2009.pdf?rlkey=615nbc6btwfmlxagidi979m80&dl=0",
    },
    {
      author: "Biao Lu and Liuren Wu",
      title: "Macroeconomic Releases and the Interest Rate Term Structure",
      journal: "Journal of Monetary Economics, 2009, 56(6), 872-884.",
      link: "https://www.dropbox.com/scl/fi/dqsasasq0tqivr47emshw/LuWuJME2009.pdf?rlkey=lkw93hgx3w8wm8mdx9ichf0sf&e=1&dl=0",
    },
    {
      author: "Massoud Heidari and Liuren Wu",
      title:
        "A Joint Framework for Consistently Pricing Interest Rates and Interest Rate Derivatives",
      journal:
        "Journal of Financial and Quantitative Analysis, 2009, 44(3), 517-550.",
      link: "https://www.dropbox.com/scl/fi/utf1dwdc04mx42t0xzmw8/HeidariWuJFQA2009.pdf?rlkey=rqxs4po21o6e6jrfcqmnsqpnj&e=1&dl=0",
    },
    {
      author: "Peter Carr and Liuren Wu",
      title: "Variance Risk Premiums",
      journal: "Review of Financial Studies, 2009, 22(3), 1311-1341.",
      link: "https://www.dropbox.com/scl/fi/fkuez5mzrm27c67nf7yy0/CarrWuRFS2009.pdf?rlkey=1mkvtk9putnx827pkroqghazq&e=1&dl=0",
    },
    {
      author: "Liuren Wu and Frank Zhang",
      title:
        "A No-Arbitrage Analysis of Economic Determinants of the Credit Spread Term Structure",
      journal: "Management Science, 2008, 54(6), 1160-1175.",
      link: "https://www.dropbox.com/scl/fi/u7qeohl1sqdcpuxojfafn/WuZhang2008MS.pdf?rlkey=i0unke25if9z7kzwsy9zp1x2q&e=1&dl=0",
    },
    {
      author: "David Easley, Robert Engle, Maureen O'Hara, and Liuren Wu",
      title: "Time-Varying Arrival Rates of Informed and Uninformed Trades",
      journal: "Journal of Financial Econometrics, 2008, 6(2), 171-207.",
      link: "https://www.dropbox.com/scl/fi/wihawcekhf8lczivum4l8/EasleyEngleOHaraWu2008.pdf?rlkey=lzlz32g7z313t41yeuazpf8q7&e=1&dl=0",
    },
    {
      author: "Gurdip Bakshi, Peter Carr, and Liuren Wu",
      title:
        "Stochastic Risk Premiums, Stochastic Skewness in Currency Options, and Stochastic Discount Factors in International Economies",
      journal: "Journal of Financial Economics, 2008, 87(1), 132-156.",
      link: "https://www.dropbox.com/scl/fi/7p92gl0n7n3tsd4rxwk10/BakshiCarrWu_JFE2008.pdf?rlkey=ir2x2wz3njngv86q090o2gbgx&e=1&dl=0",
    },
    {
      author: "Yusif Simaan and Liuren Wu",
      title: "Price Discovery in the U.S. Stock Options Market",
      journal:
        "Journal of Derivatives, 2007, 15(2), 20-38. Reprinted in Journal of Trading, 2008, 3(1), 68-86.",
      link: "https://www.dropbox.com/scl/fi/06oynk9s0f4r6cqy3420m/SimaanWu_JOD2007.pdf?rlkey=obvx6wyrapmo2iqmrr2k4psrn&e=1&dl=0",
    },
    {
      author: "Peter Carr and Liuren Wu",
      title: "Stochastic Skew in Currency Options",
      journal: "Journal of Financial Economics, 2007, 86(1), 213-247.",
      link: "https://www.dropbox.com/scl/fi/ux534lgpx9t6w08jrdx5a/CarrWu_2007JFE86.pdf?rlkey=1mjqufos8dfjtviyal9n4800q&e=1&dl=0",
    },
    {
      author: "Henry Mo and Liuren Wu",
      title: "International Capital Asset Pricing: Evidence from Options",
      journal: "Journal of Empirical Finance, 2007, 14(4), 465-498.",
      link: "https://www.dropbox.com/scl/fi/3cbr02bu2sqi4h94gc3xj/MoWu_2007JEF14-4.pdf?rlkey=cb2aseib5maux81r95nr6qw87&e=1&dl=0",
    },
    {
      author: "Peter Carr and Liuren Wu",
      title:
        "Theory and Evidence on the Dynamic Interactions Between Sovereign Credit Default Swaps and Currency Options",
      journal: "Journal of Banking and Finance, 2007, 31(8), 2383-2403.",
      link: "https://www.dropbox.com/scl/fi/j6968i6181q6yrh8pgz1j/CarrWu_2007JBF31-8.pdf?rlkey=iqzwanb2nsq7uu43zuvr61uab&e=1&dl=0",
    },
    {
      author: "Markus Leippold and Liuren Wu",
      title: "Design and Estimation of Multi-Currency Quadratic Models",
      journal: "Review of Finance, 2007, 11(2), 167-207.",
      link: "https://www.dropbox.com/scl/fi/6ey5gat85brc8a4toustj/LeippoldWu_2007RoF11-2.pdf?rlkey=ppmhqe1c897vlqx8f9104sfor&e=1&dl=0",
    },
    {
      author: "Liuren Wu",
      title: "Modeling Financial Security Returns Using Levy Processes",
      journal:
        "Handbooks in Operations Research and Management Science: Financial Engineering, 15, Eds. John Birge and Vadim Linetsky, Elsevier, 2008.",
      link: "https://www.elsevier.com/products/journals#description",
    },
    {
      author: "Richard Holowczak, Yusif Simaan, and Liuren Wu",
      title:
        "Price Discovery in the U.S. Stock and Stock Options Markets: A Portfolio Approach",
      journal: "Review of Derivatives Research, 2006, 9, 37-65.",
      link: "https://www.dropbox.com/scl/fi/w1noo6ra7vwe0cyvbjmc7/HolowczakSimaanWu_2006RDR9.pdf?rlkey=xu4r5870j91mgy2wga2a4cs7w&e=1&dl=0",
    },
    {
      author: "Liuren Wu",
      title:
        "Dampened Power Law: Reconciling the Tail Behavior of Financial Security Returns",
      journal: "Journal of Business, 2006, 79(3), 1445-1474.",
      link: "https://www.dropbox.com/scl/fi/ooozh8jh45i5o5c1u8e3l/Wu2006JBDPL.pdf?rlkey=er6370r4pbk20gehmb33cxxas&e=1&dl=0",
    },
    {
      author: "Peter Carr and Liuren Wu",
      title: "A Tale of Two Indices",
      journal: "Journal of Derivatives, 2006, 13(3), 13-29.",
      link: "https://www.dropbox.com/scl/fi/prkgzi65b5ktubmv05pi6/CarrWu2006JODvix.pdf?rlkey=sb9gv94nqy688i5bbkskvs72h&e=1&dl=0",
    },
    {
      author: "Turan Bali and Liuren Wu",
      title:
        "A Comprehensive Analysis of the Short-Term Interest Rate Dynamics",
      journal: "Journal of Banking and Finance, 2006, 30(4), 1269-1290.",
      link: "https://www.dropbox.com/scl/fi/iqiltt0v9fhunqpzyabxt/BaliWu2006JBF.pdf?rlkey=j561bqm9eojtnh9fzsmr3mbmz&e=1&dl=0",
    },
    {
      author: "Enlin Pan and Liuren Wu",
      title: "Taking Positive Interest Rates Seriously",
      journal:
        "Advances in Quantitative Analysis of Finance and Accounting, 2006, 4(14), 327-356. Reprinted in Handbook of Quantitative Finance and Risk Management, 2009, Eds. C.-F. Lee and A.C. Lee, Springer.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=585461",
    },
    {
      author: "Silverio Foresi and Liuren Wu",
      title: "Crash-O-Phobia: A Domestic Fear or A Worldwide Concern?",
      journal: "Journal of Derivatives, 2005, 13(2), 8-21.",
      link: "https://www.dropbox.com/scl/fi/zhohq5unkbrlk2tg1o7ud/ForesiWu_jod2005.pdf?rlkey=yasl6g2fce58yt31hxhmo33uo&e=1&dl=0",
    },
    {
      author: "Jing-Zhi Huang and Liuren Wu",
      title:
        "Specification Analysis of Option Pricing Models Based on Time-Changed Levy Processes",
      journal: "Journal of Finance, 2004, 59(3), 1405-1439.",
      link: "https://www.dropbox.com/scl/fi/98a0193h0rmsmx720j3tk/HuangWu2004JF.pdf?rlkey=483y1io2wo4k2gefhn92ywfxo&e=1&dl=0",
    },
    {
      author: "Peter Carr and Liuren Wu",
      title: "Time-Changed Levy Processes and Option Pricing",
      journal: "Journal of Financial Economics, 2004, 17(1), 113-141.",
      link: "https://www.dropbox.com/scl/fi/q5x8ysh65ke7d6pxfq14v/CarrWu2004JFE.pdf?rlkey=yy88hxzel23jzh4ove58hggk1&e=1&dl=0",
    },
    {
      author: "Peter Carr and Liuren Wu",
      title: "What Type of Process Underlies Options? A Simple Robust Test",
      journal: "Journal of Finance, 2003, 58(6), 2581-2610.",
      link: "https://www.dropbox.com/scl/fi/nbkvzjvmutwlovirnbk7l/CarrWu2003JF.pdf?rlkey=84ve5dnioxxx4uzyb5br28y1d&e=1&dl=0",
    },
    {
      author: "Peter Carr and Liuren Wu",
      title: "Finite Moment Log Stable Process and Option Pricing",
      journal: "Journal of Finance, 2003, 58(2), 753-777.",
      link: "https://www.dropbox.com/scl/fi/nbkvzjvmutwlovirnbk7l/CarrWu2003JF.pdf?rlkey=84ve5dnioxxx4uzyb5br28y1d&e=1&dl=0",
    },
    {
      author: "Markus Leippold and Liuren Wu",
      title: "Design and Estimation of Quadratic Term Structure Models",
      journal: "European Finance Review, 2003, 7(1), 47-73.",
      link: "https://www.dropbox.com/scl/fi/58qz5jf3kyz96izpvk5xb/LeippoldWu2003EFR.pdf?rlkey=xw4gy2zgniqm6tarxb8taxcdq&e=1&dl=0",
    },
    {
      author: "Massoud Heidari and Liuren Wu",
      title:
        "Are Interest Rate Derivatives Spanned by the Term Structure of Interest Rates?",
      journal: "Journal of Fixed Income, 2003, 13(1), 75-86.",
      link: "https://www.dropbox.com/scl/fi/rb6rqwx28juitzchlqmup/HeidariWu2003JFI.pdf?rlkey=22rkr1wby6zm91u2hhg1gpyca&e=1&dl=0",
    },
    {
      author: "Liuren Wu",
      title: "Jumps and Dynamic Asset Allocation",
      journal:
        "Review of Quantitative Finance and Accounting, 2003, 20(3), 207-243.",
      link: "https://www.dropbox.com/scl/fi/yz1wb578pfa2wvsoi82t5/Wu2003RQFA.pdf?rlkey=ng7okbn2xjqjl736u1ncrf9m6&dl=0",
    },
    {
      author: "Markus Leippold and Liuren Wu",
      title: "Asset Pricing Under The Quadratic Class",
      journal:
        "Journal of Financial and Quantitative Analysis, 2002, 37(2), 271-295.",
      link: "https://www.dropbox.com/scl/fi/ve5wrsqs3y8qu8ivtniqm/LeippoldWuJFQA2002.pdf?rlkey=bdeetpdhh5e4g2c348ob51nw0&e=1&dl=0",
    },
    {
      author: "David Backus, Silverio Foresi, Abon Mozumdar, and Liuren Wu",
      title: "Predictable Changes in Yields and Forward Rates",
      journal: "Journal of Financial Economics, 2001, 59(3), 281-311.",
      link: "https://www.dropbox.com/scl/fi/724gr0jzngyajbymu9t6q/BackusForesiMozumdarWu2001JFE.pdf?rlkey=4jid69hiuyb9jm277vtmnwjw0&e=1&dl=0",
    },
  ];

  const workingPapersDescription = [
    {
      line: "Cross-sectional Variation of Risk-targeting Option Portfolios, Liuren Wu and Yaofei Xu.",
      description:
        "Options contracts are listed on thousands of stocks with different number of contracts per each name. This paper proposes to construct four risk-targeting option portfolios to consolidate the information in all the option contracts on each stock at any given date along four risk dimensions. A cross-sectional regression identifies the market price of each risk dimension. The pricing estimates positively predict the excess returns of the corresponding option portfolio. Long-short portfolio of option portfolio construction along each risk dimension in proportion to the market price of risk estimates generates highly positive risk-adjusted excess returns across all four risk dimensions. (Appendix, sample code)",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4922029",
    },

    {
      line: "Finding Value in the U.S. Corporate Bond Market, Liuren Wu and Hashim Zaman.",
      description:
        "This paper strives to identify value-based systematic investment opportunities in the U.S. corporate bond market through the joint construction of a bond valuation model and a return factor model. The valuation model explains the cross-sectional variation of bond yields with a flexible local linear functional form in bond risk characteristics. The return factor model embeds the residual yield from the valuation model as a mispricing factor, while accounting for stronger co-movements between bonds from the same industry, similar rating classes, and similar duration segments, as well as differential market pricing for bond return risk, liquidity cost, and optionality exposure. The slope coefficient on the mispricing factor captures the ex post excess return on the value-investing portfolio that targets a unit exposure to the identified mispricing opportunities while being neutral to all systematic risk exposures. ",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4852548",
    },

    {
      line: "Separate Risk from Optionality, Liuren Wu and Yang Xu.",
      description:
        "Investors are averse to risk but love optionality. When a security's embedded optionality increases with its risk level, the entanglement,  combined with the opposite investor preferences, can generate seemingly abnormal market pricing behaviors. This paper frames the bond and stock return behavior within a structural framework and disentangles their directional risk exposure from their optionality exposure via a joint stock-bond return factor model. The factor portfolio targeting a unit exposure to market risk but zero exposure to optionality generates a significantly positive average excess return, consistent with investor risk aversion. By contrast, the factor portfolio targeting a unit exposure to optionality but without directional exposure to firm value variation generates a significantly negative average excess return, reflecting investor penchant for optionality. The separation of risk from optionality sheds light on the distress puzzle in the stock and bond market and helps explain the bet-against-beta and volatility premiums in the stock market. ",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4638075",
    },
  ];

  const talksDescription = [
    {
      line: "Option pricing bottom up and top down,",
      description:
        "Peter Carr Memorial Conference, New York University, June 3, 2022.",
    },
    {
      line: "Machine learning v structural modeling in finance,",
      description: "Jinan, China, September 25, 2022.",
    },
    {
      line: "Common pricing of decentralized risk: A linear option pricing model,",
      description:
        "Peter Carr Brooklyn Quant Experience Seminar Series, October 13, 2022.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4248508",
    },
    {
      line: "Common pricing of decentralized risk: A linear option pricing model (video),",
      description: "Virtual Derivatives Workshop, January 19, 2023.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4248508",
    },
    {
      line: "Common pricing of decentralized risk: A linear option pricing model,",
      description:
        "Cancun Derivatives and Asset Pricing Conference 2023, March 2, 2023.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4248508",
    },
    {
      line: "Option pricing bottom up and top down,",
      description:
        "Financial & Actuarial Series Seminar, Xi'an Jiaotong-Liverpool University, March 17, 2023.",
    },
    {
      line: "Option pricing bottom up and top down,",
      description:
        "The Second Annual Faculty Research Symposium, Baruch College, March 24, 2023.",
    },
    {
      line: "Common pricing of decentralized risk: A linear option pricing model,",
      description: "IAQF & Thalesians Seminar Series, New York, May 9, 2023.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4248508",
    },
    {
      line: "Finding value in the U.S. corporate bond market (slides),",
      description: "CUNY Brown Bag, New York, September 19, 2024.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4852548",
    },
    {
      line: "Finding value in the U.S. corporate bond market (slides),",
      description: "HEC Montreal, November 8, 2024.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4852548",
    },
    {
      line: "Cross-sectional variation of risk-targeting option portfolios (slides),",
      description: "FMA derivatives, Chicago, November 16, 2024.",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4922029",
    },
  ];
  const itemsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPages((prevPages) => ({
      ...prevPages,
      [activeTab]: page,
    }));
  };

  const getPaginatedData = (data) => {
    const currentPage = currentPages[activeTab];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const totalPages = (data) => Math.ceil(data.length / itemsPerPage);

  const renderPagination = (data) => {
    const totalPageCount = totalPages(data);
    const currentPage = currentPages[activeTab];
    const pageNumbers = [];

    if (totalPageCount <= 5) {
      for (let i = 1; i <= totalPageCount; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPageCount - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPageCount - 2) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPageCount);
    }

    return (
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          &lt;
        </button>

        {pageNumbers.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              className={currentPage === page ? "active" : ""}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="pagination-ellipsis">
              ...
            </span>
          )
        )}

        <button
          disabled={currentPage === totalPageCount}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Publications":
        return (
          <>
            {getPaginatedData(insightsData).map((item, index) => (
              <div key={index} className="insight-item">
                <p className="insight-author">{item.author}</p>
                <p className="insight-title">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </p>
                <p className="insight-journal">{item.journal}</p>
              </div>
            ))}
            {renderPagination(insightsData)}
          </>
        );
      case "Working Papers":
        return (
          <>
            {getPaginatedData(workingPapersDescription).map((item, index) => (
              <div key={index} className="insight-item">
                <p className="insight-author">{item.line}</p>
                <p className="insight-title">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.description}
                    </a>
                  ) : (
                    item.description
                  )}
                </p>
              </div>
            ))}
            {renderPagination(workingPapersDescription)}
          </>
        );
      case "Talks":
        return (
          <>
            {getPaginatedData(talksDescription).map((item, index) => (
              <div key={index} className="insight-item">
                <p className="insight-author">{item.line}</p>
                <p className="insight-title">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.description}
                    </a>
                  ) : (
                    item.description
                  )}
                </p>
              </div>
            ))}
            {renderPagination(talksDescription)}
          </>
        );
      case "Search":
        return <div>Search content goes here...</div>;
      default:
        return null;
    }
  };

  return (
    <section className="insights-container">
      <div className="insights-box">
        <h2 className="insights-title">Insights</h2>
        <div className="sidebar">
          {[
            { tab: "Publications", icon: <BookOpen size={20} /> },
            { tab: "Working Papers", icon: <Send size={20} /> },
            { tab: "Talks", icon: <Volume2 size={20} /> },
            { tab: "Search", icon: <Search size={20} /> },
          ].map(({ tab, icon }) => (
            <button
              key={tab}
              className={`sidebar-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <span className="icon-text-container">
                {icon}
                <span className="tab-text">{tab}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="insights-content">{renderContent()}</div>
    </section>
  );
};

export default InsightsSection;
