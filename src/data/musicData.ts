import type { MusicData, Track } from "../types";

// Helper function to create tracks from data
const createTracks = (trackNames: string[], urls: string[]): Track[] => {
  return trackNames.map((name, index) => ({
    title: name,
    url: urls[index] || "",
  }));
};

// Process the raw data into structured format
export const musicData: MusicData = {
  categories: [
    {
      name: "Solfeggio Frequencies",
      icon: "wave",
      color: "golden",
      categories: [
        {
          name: "174 Hz - Pain Reduction",
          icon: "shield",
          color: "#E74C3C",
          tracks: createTracks(
            [
              "174 Foundation",
              "174 Pain Relief & Healing",
              "174 Deep Healing",
              "174 Healing Tone for Sleep",
              "Solfeggio Frequencies 174",
            ],
            [
              "https://www.youtube.com/watch?v=w31mE5ZqtlI",
              "https://www.youtube.com/watch?v=Y7VcZv3coB8",
              "https://www.youtube.com/watch?v=eSV13aveY-Y",
              "https://www.youtube.com/watch?v=sYbd71SgcaQ",
              "https://www.youtube.com/watch?v=N0tKWiX8sTM",
            ]
          ),
        },
        {
          name: "396 Hz - Liberating Guilt and Fear",
          icon: "unlock",
          color: "#9B59B6",
          tracks: createTracks(
            [
              "396 Let Go of Fear & Guilt",
              "396 Dissolve Negativity",
              "396 Liberation from Fear",
              "396 Cleanse Fear & Negative Blocks",
              "Solfeggio Frequencies 396",
            ],
            [
              "https://www.youtube.com/watch?v=NpOVgXdXA4Q",
              "https://www.youtube.com/watch?v=UFFOsKSkAJw",
              "https://www.youtube.com/watch?v=r7fLDo2TBZ4",
              "https://www.youtube.com/watch?v=Uziyi1AaHyI",
              "https://www.youtube.com/watch?v=-teZoroRy4c",
            ]
          ),
        },
        {
          name: "417 Hz - Undoing Situations and Facilitating Change",
          icon: "refresh-cw",
          color: "#F39C12",
          tracks: createTracks(
            [
              "417 Facilitate Change",
              "417 Clear Negative Energy",
              "417 Undo Emotional Patterns",
              "417 Remove Negative Blocks",
              "Solfeggio Frequencies 417",
            ],
            [
              "https://www.youtube.com/watch?v=b2EKqZ0A_lQ",
              "https://www.youtube.com/watch?v=C8c8Ml5aXkM",
              "https://www.youtube.com/watch?v=fjW3fdCYF08",
              "https://www.youtube.com/watch?v=V5B-U4_fxyo",
              "https://www.youtube.com/watch?v=vzMDbRrh0wo",
            ]
          ),
        },
        {
          name: "528 Hz - Transformation and Miracles (DNA Repair)",
          icon: "dna",
          color: "#27AE60",
          tracks: createTracks(
            [
              "528 Release Inner Conflict & Struggle",
              "528 Anxiety Relief",
              "528 DNA Repair",
              "528 Love Frequency",
              "Solfeggio Frequencies 528",
            ],
            [
              "https://www.youtube.com/watch?v=u6g6dg9RwLA",
              "https://www.youtube.com/watch?v=6SBNgINmaCY",
              "https://www.youtube.com/watch?v=sL9F3LMo3Po",
              "https://www.youtube.com/watch?v=PNb-aeBrN7U",
              "https://www.youtube.com/watch?v=1rWCKen_HCI",
            ]
          ),
        },
        {
          name: "639 Hz - Connecting Relationships",
          icon: "heart",
          color: "#E91E63",
          tracks: createTracks(
            [
              "639 Attract Love & Raise Positive Energy",
              "639 Harmonize Relationships",
              "639 Heal Heart Chakra",
              "639 Miracle Love Tone",
              "Solfeggio Frequencies 639",
            ],
            [
              "https://www.youtube.com/watch?v=R8Yy1hEPHn0",
              "https://www.youtube.com/watch?v=4Zc0p898P-Q",
              "https://www.youtube.com/watch?v=9bzpYFo_Bgo",
              "https://www.youtube.com/watch?v=o3ODJiMCI2c",
              "https://www.youtube.com/watch?v=YeGf6F1t6EE",
            ]
          ),
        },
        {
          name: "741 Hz - Full Body Detox",
          icon: "droplets",
          color: "#3498DB",
          tracks: createTracks(
            [
              "741 Spiritual Detox",
              "741 Dissolve Toxins & Electromagnetic Radiations",
              "741 Full Body Cell Level Detox",
              "741 Cleanse Aura",
              "Solfeggio Frequencies 741",
            ],
            [
              "https://www.youtube.com/watch?v=fnzrcsEF4ww",
              "https://www.youtube.com/watch?v=UWe9x1fQxYE",
              "https://www.youtube.com/watch?v=THVh4iXNnO0",
              "https://www.youtube.com/watch?v=9GmUVgPzc6Y",
              "https://www.youtube.com/watch?v=NsC5iXTEsXs",
            ]
          ),
        },
        {
          name: "852 Hz - Returning to Spiritual Order",
          icon: "eye",
          color: "#6A5ACD",
          tracks: createTracks(
            [
              "852 Awake Intuition",
              "852 Let Go of Overthinking & Worries",
              "852 Open Up to Spiritual Experience",
              "852 Reset The Mind",
              "Solfeggio Frequencies 852",
            ],
            [
              "https://www.youtube.com/watch?v=1DwwNXtgf-M",
              "https://www.youtube.com/watch?v=hN_Owk5Aul4",
              "https://www.youtube.com/watch?v=00CHwVfrNfc",
              "https://www.youtube.com/watch?v=9vqViHW_S2o",
              "https://www.youtube.com/watch?v=kztCqyTaOqQ",
            ]
          ),
        },
        {
          name: "963 Hz - Returning to Oneness",
          icon: "sun",
          color: "#FFD700",
          tracks: createTracks(
            [
              "963 Open Third Eye",
              "963 Activate Pineal Gland",
              "963 Remove Self Limiting Beliefs",
              "963 Courage & Inner Power",
              "Solfeggio Frequencies 963",
            ],
            [
              "https://www.youtube.com/watch?v=otIO6SHfiag",
              "https://www.youtube.com/watch?v=JmKYU38wNFE",
              "https://www.youtube.com/watch?v=vtz2Klag-0Y",
              "https://www.youtube.com/watch?v=_MZHAR8WaYw",
              "https://www.youtube.com/watch?v=XneMWMMvbVk",
            ]
          ),
        },
      ],
    },
    {
      name: "Binaural Beats",
      icon: "headphones",
      color: "ocean",
      categories: [
        {
          name: "0.5-4 Hz - Sleep (Delta Waves)",
          icon: "moon",
          color: "#2C3E50",
          tracks: createTracks(
            [
              "3.2 Healing Sleep",
              "3 Access to Unconscious Mind",
              "2 Dreamless Sleep",
              "1 Deep Sleep",
              "0.5 Delta Waves",
            ],
            [
              "https://www.youtube.com/watch?v=FbpVaTBs4Jk",
              "https://www.youtube.com/watch?v=JvqTzQ0tb48",
              "https://www.youtube.com/watch?v=3kVSWGmUZ2A",
              "https://www.youtube.com/watch?v=i-B3bnCH87c",
              "https://www.youtube.com/watch?v=HbcNQlAl_Hho",
            ]
          ),
        },
        {
          name: "4-8 Hz - Meditation (Theta Waves)",
          icon: "lotus",
          color: "#8E44AD",
          tracks: createTracks(
            [
              "7 Meditation & Inner Peace",
              "6 Deep Relaxation",
              "5 Creativity",
              "4.5 REM Sleep",
              "4 Theta Waves",
            ],
            [
              "https://www.youtube.com/watch?v=N8-U1KW_qW8",
              "https://www.youtube.com/watch?v=_E95KdGPNdA",
              "https://www.youtube.com/watch?v=bUQsd6g5sPY",
              "https://www.youtube.com/watch?v=Rn8DqNXcCpc",
              "https://www.youtube.com/watch?v=oNdiRdrQGlc",
            ]
          ),
        },
        {
          name: "8-13 Hz - Focus (Alpha Waves)",
          icon: "target",
          color: "#E67E22",
          tracks: createTracks(
            [
              "12.5 Focus",
              "12 Super Learning",
              "11 Flow State",
              "10 Stress Reduction",
              "8 Alpha Waves",
            ],
            [
              "https://www.youtube.com/watch?v=3gRvK1Bhe_c",
              "https://www.youtube.com/watch?v=Qd0HEXGug8I",
              "https://www.youtube.com/watch?v=PgYFPJyRi_o",
              "https://www.youtube.com/watch?v=K_pDXBgfwZk",
              "https://www.youtube.com/watch?v=Vvo5jmN8JKU",
            ]
          ),
        },
        {
          name: "13-30 Hz - Concentration (Beta Waves)",
          icon: "brain",
          color: "#34495E",
          tracks: createTracks(
            [
              "13 Concentration",
              "14 Focused Attention",
              "18 Cognitive Thinking",
              "20 Problem Solving",
              "30 Beta Waves",
            ],
            [
              "https://www.youtube.com/watch?v=3SoVy6Zrhro",
              "https://www.youtube.com/watch?v=BtIThDlOWw8",
              "https://www.youtube.com/watch?v=nz4_Cy5MWTo",
              "https://www.youtube.com/watch?v=pOvBenNg7Bo",
              "https://www.youtube.com/watch?v=4Egx3zwXu8Q",
            ]
          ),
        },
        {
          name: "30-100 Hz - Peak Awareness (Gamma Waves)",
          icon: "zap",
          color: "#F1C40F",
          tracks: createTracks(
            [
              "40 Memory Recall",
              "50 High Level Cognition",
              "60 Transcendental States",
              "70 Peak Awareness",
              "80 Gamma Waves",
            ],
            [
              "https://www.youtube.com/watch?v=YuqVAVq0I6c",
              "https://www.youtube.com/watch?v=6X8PjRaDei8",
              "https://www.youtube.com/watch?v=v0AK4icCqkc",
              "https://www.youtube.com/watch?v=ay1ekFL3unc",
              "https://www.youtube.com/watch?v=9Sz4OyAApZE",
            ]
          ),
        },
        {
          name: "40 Hz - Focus Music",
          icon: "music",
          color: "#16A085",
          tracks: createTracks(
            [
              "40 Binaural Beats",
              "40 Study Music",
              "40 Focus Frequency",
              "40 Improve Memory",
              "40 Increase Productivity",
              "40 Flow State Thinking",
              "40 Deep Focus",
              "40 Gamma Waves",
              "40 Increase Brain Power",
              "40 Concentration Music",
            ],
            [
              "https://www.youtube.com/watch?v=58pEulCTXbI",
              "https://www.youtube.com/watch?v=H5ysR9DmX2g",
              "https://www.youtube.com/watch?v=uCWYnyrXUbo",
              "https://www.youtube.com/watch?v=Dx-_BoQZbvM",
              "https://www.youtube.com/watch?v=csgQawb2q-4",
              "https://www.youtube.com/watch?v=S5FmJBXwTGM",
              "https://www.youtube.com/watch?v=pR9W7quW1Rg",
              "https://www.youtube.com/watch?v=rCb1v6oXdWo",
              "https://www.youtube.com/watch?v=EA_SXUWRxEw",
              "https://www.youtube.com/watch?v=hcNQlAl_Hho",
            ]
          ),
        },
      ],
    },
    {
      name: "432 Hz Collections",
      icon: "music",
      color: "amber",
      categories: [
        {
          name: "Deep Sleep",
          icon: "bed",
          color: "#2980B9",
          tracks: createTracks(
            [
              "432 Sleep Music",
              "432 Deep Sleep",
              "432 Insomnia Relief",
              "432 Calm Your Mind",
              "432 Fall Asleep",
              "432 Manifest Miracles While You Sleep",
              "432 Deep Healing Sleep",
              "432 Sleep Frequency",
              "432 Ambient Relaxation",
              "432 Miracle Sleep Music",
            ],
            [
              "https://www.youtube.com/watch?v=cmC1dTjPSt4",
              "https://www.youtube.com/watch?v=kZJVoOTCS8w",
              "https://www.youtube.com/watch?v=aw4jdNR7Y1E",
              "https://www.youtube.com/watch?v=fb1GaMOj940",
              "https://www.youtube.com/watch?v=1aKUbuiUZd8",
              "https://www.youtube.com/watch?v=0Qxs_aGpYh4",
              "https://www.youtube.com/watch?v=P7lAxmfU1AQ",
              "https://www.youtube.com/watch?v=j74gd7hyTQA",
              "https://www.youtube.com/watch?v=QlV1kX1msQY",
              "https://www.youtube.com/watch?v=dZ7_GwBQ-EE",
            ]
          ),
        },
        {
          name: "Deep Healing",
          icon: "heart-pulse",
          color: "#2ECC71",
          tracks: createTracks(
            [
              "432 Miracle Sleep Tone",
              "432 Deep Relaxation",
              "432 Bring Down Heart Rate",
              "432 Calm the Mind",
              "432 Ease Anxiety",
              "432 Healing Sleep Music",
              "432 Raise Positive Energy",
              "432 Deep Theta Meditation",
              "432 Manifest Miracles",
              "432 Elevate Your Vibration",
              "432 Healing Music",
              "Healing Tone 432",
            ],
            [
              "https://www.youtube.com/watch?v=nSH7Od71uc0",
              "https://www.youtube.com/watch?v=rASM_KlKKlk",
              "https://www.youtube.com/watch?v=CESJiN7mpBU",
              "https://www.youtube.com/watch?v=5fCMERnCq1Y",
              "https://www.youtube.com/watch?v=hks3kNQY4Rc",
              "https://www.youtube.com/watch?v=6LrJvcZL1O8",
              "https://www.youtube.com/watch?v=gH0aqQlrWhc",
              "https://www.youtube.com/watch?v=ZITmOpAZhFI",
              "https://www.youtube.com/watch?v=favY7BgV9_8",
              "https://www.youtube.com/watch?v=G9O8SVZV_8M",
              "https://www.youtube.com/watch?v=xeuQ4INMtgY",
              "https://www.youtube.com/watch?v=ejz6ybdpkkI",
            ]
          ),
        },
      ],
    },
    {
      name: "Special Frequencies",
      icon: "sparkles",
      color: "purple",
      categories: [
        {
          name: "Attract Positivity",
          icon: "sparkles",
          color: "#F39C12",
          tracks: createTracks(
            [
              "777 Manifest Positivity & Self-Confidence",
              "777 Attract Luck & Abundance",
              "777 Angelic Healing Frequency",
              "777 Good Luck Magnet",
              "777 Law of Attraction Frequency",
            ],
            [
              "https://www.youtube.com/watch?v=ZdclC2KLsc8",
              "https://www.youtube.com/watch?v=a_YLY0Wqu7E",
              "https://www.youtube.com/watch?v=qjH5vye_dMU",
              "https://www.youtube.com/watch?v=wqqmRQc7kOY",
              "https://www.youtube.com/watch?v=aTLAWvu1WV4",
            ]
          ),
        },
        {
          name: "Abundance Gate",
          icon: "coins",
          color: "#D4AF37",
          tracks: createTracks(
            [
              "888 Abundance Gate",
              "888 Infinite Abundance, Love & Wealth",
              "888 Sacred Geometry",
              "888 Attract Wealth",
              "888 Angel Number",
            ],
            [
              "https://www.youtube.com/watch?v=PL67e5aBpQo",
              "https://www.youtube.com/watch?v=LlqIuCW-5Z4",
              "https://www.youtube.com/watch?v=wXdnBrWFJlU",
              "https://www.youtube.com/watch?v=7KH06inLlK4",
              "https://www.youtube.com/watch?v=uLaVHV6jGKI",
            ]
          ),
        },
      ],
    },
    {
      name: "Wellness & Healing",
      icon: "heart-pulse",
      color: "green",
      categories: [
        {
          name: "Anxiety Relief",
          icon: "shield-check",
          color: "#1ABC9C",
          tracks: createTracks(
            [
              "In This Moment, I Am",
              "Free",
              "Calm",
              "Peaceful",
              "Present",
              "Grounded",
              "Whole",
              "Eternal",
              "Infinite",
              "Enough",
            ],
            [
              "https://www.youtube.com/watch?v=K2yeAMGesyE",
              "https://www.youtube.com/watch?v=YdS7ZJzLUHs",
              "https://www.youtube.com/watch?v=zTC_3P-RXxs",
              "https://www.youtube.com/watch?v=3O8o5Kb5PLk",
              "https://www.youtube.com/watch?v=UbiCWHrcCMA",
              "https://www.youtube.com/watch?v=GZE51B9v3D8",
              "https://www.youtube.com/watch?v=xSJdsjIJF10",
              "https://www.youtube.com/watch?v=TN4m0P41QU4",
              "https://www.youtube.com/watch?v=Zj2SzEmqEjg",
              "https://www.youtube.com/watch?v=W1cHIqmlzmA",
            ]
          ),
        },
        {
          name: "Heart Chakra Healing",
          icon: "heart",
          color: "#E91E63",
          tracks: createTracks(
            [
              "639 Manifest Love & Miracles",
              "639 Heart Chakra",
              "639 Healing Relationships",
              "639 Love Frequency",
              "639 Attract Love",
              "639 Heart Frequency",
              "639 Pure Positive Energy",
              "639 Solfeggio Frequency",
              "639 Find Love",
              "639 Frequency",
            ],
            [
              "https://www.youtube.com/watch?v=UG4U5OJ_rU8",
              "https://www.youtube.com/watch?v=wnGT5rxDPso",
              "https://www.youtube.com/watch?v=fuesG4cCPxM",
              "https://www.youtube.com/watch?v=Y8Zh0hXCneg",
              "https://www.youtube.com/watch?v=mwS4LP_HWT4",
              "https://www.youtube.com/watch?v=JoD_TWApgLQ",
              "https://www.youtube.com/watch?v=thyuxR4NBa0",
              "https://www.youtube.com/watch?v=mRNPjsjBQDs",
              "https://www.youtube.com/watch?v=CASfMW8zfvI",
              "https://www.youtube.com/watch?v=-LOvUmYikgI",
            ]
          ),
        },
      ],
    },
    {
      name: "Meditation & Mindfulness",
      icon: "brain",
      color: "indigo",
      categories: [
        {
          name: "Meditation Music",
          icon: "om",
          color: "#E74C3C",
          tracks: createTracks(
            [
              "528 Love & Miracles",
              "528 Bring Positive Transformation",
              "528 Heal Golden Chakra",
              "528 Manifest Your Greatness",
              "528 Whole Body Regeneration",
              "528 Emotional Healing",
              "528 Raise Positive Vibrations",
              "528 Manifest Love",
              "528 Dreamscape for Positive Transformation",
              "528 Meditation Music",
            ],
            [
              "https://www.youtube.com/watch?v=Ut4N6_B-TDw",
              "https://www.youtube.com/watch?v=YDOBNv4HTXE",
              "https://www.youtube.com/watch?v=yEpBpnlmNCs",
              "https://www.youtube.com/watch?v=WIIZe2_KmIQ",
              "https://www.youtube.com/watch?v=JlUoUFLKFDM",
              "https://www.youtube.com/watch?v=BkfXf7Ht84M",
              "https://www.youtube.com/watch?v=ohFschkUw8s",
              "https://www.youtube.com/watch?v=7bwl3ksAKAs",
              "https://www.youtube.com/watch?v=HWLreDmz9p4",
              "https://www.youtube.com/watch?v=uV6gabswn38",
            ]
          ),
        },
        {
          name: "Mindfulness",
          icon: "leaf",
          color: "#27AE60",
          tracks: createTracks(
            [
              "417 New Beginnings",
              "417 Remove Negative Energy",
              "417 Let Go of Mental Blockages",
              "417 Cleanse Trauma",
              "417 Undo Damage",
              "417 Sacral Chakra",
              "417 Positive Change",
              "417 Transmutation",
              "417 Find Inner Balance",
              "417 Manifest Positive Energy",
            ],
            [
              "https://www.youtube.com/watch?v=i02NIW85l9w",
              "https://www.youtube.com/watch?v=l4781Fg5D64",
              "https://www.youtube.com/watch?v=82VsZ0A_lQ",
              "https://www.youtube.com/watch?v=ydVvVU3oBAQ",
              "https://www.youtube.com/watch?v=eUw43tN8rH8",
              "https://www.youtube.com/watch?v=m-iLq4cib6o",
              "https://www.youtube.com/watch?v=le0V1kX9GE",
              "https://www.youtube.com/watch?v=55mYg1fCQi4",
              "https://www.youtube.com/watch?v=m71NKP8oxy0",
              "https://www.youtube.com/watch?v=1td4VrDgmRw",
            ]
          ),
        },
      ],
    },
  ],
};

export default musicData;
