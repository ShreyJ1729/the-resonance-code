import { MusicData, MainCategory, Category, Track } from '../types';

// Helper function to create tracks from data
const createTracks = (trackNames: string[], urls: string[]): Track[] => {
  return trackNames.map((name, index) => ({
    title: name,
    url: urls[index] || ''
  }));
};

// Process the raw data into structured format
export const musicData: MusicData = {
  categories: [
    {
      name: "Solfeggio Frequencies",
      icon: "wave",
      color: "primary-500",
      categories: [
        {
          name: "Solfeggio Frequencies - Loopable Tracks",
          tracks: createTracks(
            [
              "174 Hz Foundation - Loopable with No Fade",
              "285 Hz Quantum Cognition - Loopable with No Fade",
              "396 Hz Liberation From Fear - Loopable with No Fade",
              "417 Hz Transmutation - Loopable with No Fade",
              "528 Hz Miracle - Loopable with No Fade",
              "639 Hz Relationship Harmonization - Loopable with No Fade",
              "741 Hz Consciousness Expansion - Loopable with No Fade",
              "852 Hz Awakening Intuition - Loopable with No Fade",
              "963 Hz Numinous Accord - Loopable with No Fade"
            ],
            [
              "https://www.youtube.com/watch?v=xXrnPoY71uA",
              "https://www.youtube.com/watch?v=pfzYbOkjzag",
              "https://www.youtube.com/watch?v=vwGEm5ZlUTU",
              "https://www.youtube.com/watch?v=RjxtaekWPmQ",
              "https://www.youtube.com/watch?v=s0DqOzradC4",
              "https://www.youtube.com/watch?v=0NUlgz4dKbA",
              "https://www.youtube.com/watch?v=n8JP2zQpBCU",
              "https://www.youtube.com/watch?v=9o0N6bZXd1U",
              "https://www.youtube.com/watch?v=IKHUNQ28JlY"
            ]
          )
        },
        {
          name: "174 Hz Pain Reduction",
          tracks: createTracks(
            [
              "174 Hz Foundation",
              "174 Hz Pain Relief & Healing",
              "174 Hz Deep Healing",
              "174 Hz Healing Tone for Sleep",
              "Solfeggio Frequencies 174 Hz"
            ],
            [
              "https://www.youtube.com/watch?v=w31mE5ZqtlI",
              "https://www.youtube.com/watch?v=Y7VcZv3coB8",
              "https://www.youtube.com/watch?v=eSV13aveY-Y",
              "https://www.youtube.com/watch?v=sYbd71SgcaQ",
              "https://www.youtube.com/watch?v=N0tKWiX8sTM"
            ]
          )
        },
        {
          name: "396 Hz Liberating Guilt and Fear",
          tracks: createTracks(
            [
              "396 Hz Let Go of Fear & Guilt",
              "396 Hz Dissolve Negativity",
              "396 Hz Liberation from Fear",
              "396 Hz Cleanse Fear & Negative Blocks",
              "Solfeggio Frequencies 396 Hz"
            ],
            [
              "https://www.youtube.com/watch?v=NpOVgXdXA4Q",
              "https://www.youtube.com/watch?v=UFFOsKSkAJw",
              "https://www.youtube.com/watch?v=r7fLDo2TBZ4",
              "https://www.youtube.com/watch?v=Uziyi1AaHyI",
              "https://www.youtube.com/watch?v=-teZoroRy4c"
            ]
          )
        },
        {
          name: "417 Hz Undoing Situations and Facilitating Change",
          tracks: createTracks(
            [
              "417 Hz Facilitate Change",
              "417 Hz Clear Negative Energy",
              "417 Hz Undo Emotional Patterns",
              "417 Hz Remove Negative Blocks",
              "Solfeggio Frequencies 417 Hz"
            ],
            [
              "https://www.youtube.com/watch?v=b2EKqZ0A_lQ",
              "https://www.youtube.com/watch?v=C8c8Ml5aXkM",
              "https://www.youtube.com/watch?v=fjW3fdCYF08",
              "https://www.youtube.com/watch?v=V5B-U4_fxyo",
              "https://www.youtube.com/watch?v=vzMDbRrh0wo"
            ]
          )
        },
        {
          name: "528 Hz Transformation and Miracles (DNA Repair)",
          tracks: createTracks(
            [
              "528 Hz Release Inner Conflict & Struggle",
              "528 Hz Anxiety Relief",
              "528 Hz DNA Repair",
              "528 Hz Love Frequency",
              "Solfeggio Frequencies 528 Hz"
            ],
            [
              "https://www.youtube.com/watch?v=u6g6dg9RwLA",
              "https://www.youtube.com/watch?v=6SBNgINmaCY",
              "https://www.youtube.com/watch?v=sL9F3LMo3Po",
              "https://www.youtube.com/watch?v=PNb-aeBrN7U",
              "https://www.youtube.com/watch?v=1rWCKen_HCI"
            ]
          )
        },
        {
          name: "639 Hz Connecting Relationships",
          tracks: createTracks(
            [
              "639 Hz Attract Love & Raise Positive Energy",
              "639 Hz Harmonize Relationships",
              "639 Hz Heal Heart Chakra",
              "639 Hz Miracle Love Tone",
              "Solfeggio Frequencies 639 Hz"
            ],
            [
              "https://www.youtube.com/watch?v=R8Yy1hEPHn0",
              "https://www.youtube.com/watch?v=4Zc0p898P-Q",
              "https://www.youtube.com/watch?v=9bzpYFo_Bgo",
              "https://www.youtube.com/watch?v=o3ODJiMCI2c",
              "https://www.youtube.com/watch?v=YeGf6F1t6EE"
            ]
          )
        },
        {
          name: "741 Hz Full Body Detox",
          tracks: createTracks(
            [
              "741 Hz Spiritual Detox",
              "741 Hz Dissolve Toxins & Electromagnetic Radiations",
              "741 Hz Full Body Cell Level Detox",
              "741 Hz Cleanse Aura",
              "Solfeggio Frequencies 741 Hz"
            ],
            [
              "https://www.youtube.com/watch?v=fnzrcsEF4ww",
              "https://www.youtube.com/watch?v=UWe9x1fQxYE",
              "https://www.youtube.com/watch?v=THVh4iXNnO0",
              "https://www.youtube.com/watch?v=9GmUVgPzc6Y",
              "https://www.youtube.com/watch?v=NsC5iXTEsXs"
            ]
          )
        },
        {
          name: "852 Hz Returning to Spiritual Order",
          tracks: createTracks(
            [
              "852 Hz Awake Intuition",
              "852 Hz Let Go of Overthinking & Worries",
              "852 Hz Open Up to Spiritual Experience",
              "852 Hz Reset The Mind",
              "Solfeggio Frequencies 852 Hz"
            ],
            [
              "https://www.youtube.com/watch?v=1DwwNXtgf-M",
              "https://www.youtube.com/watch?v=hN_Owk5Aul4",
              "https://www.youtube.com/watch?v=00CHwVfrNfc",
              "https://www.youtube.com/watch?v=9vqViHW_S2o",
              "https://www.youtube.com/watch?v=kztCqyTaOqQ"
            ]
          )
        },
        {
          name: "963 Hz Returning to Oneness",
          tracks: createTracks(
            [
              "963 Hz Open Third Eye",
              "963 Hz Activate Pineal Gland",
              "963 Hz Remove Self Limiting Beliefs",
              "963 Hz Courage & Inner Power",
              "Solfeggio Frequencies 963 Hz"
            ],
            [
              "https://www.youtube.com/watch?v=otIO6SHfiag",
              "https://www.youtube.com/watch?v=JmKYU38wNFE",
              "https://www.youtube.com/watch?v=vtz2Klag-0Y",
              "https://www.youtube.com/watch?v=_MZHAR8WaYw",
              "https://www.youtube.com/watch?v=XneMWMMvbVk"
            ]
          )
        }
      ]
    },
    {
      name: "Binaural Beats",
      icon: "headphones",
      color: "secondary-500",
      categories: [
        {
          name: "Binaural Beats - Sleep (Delta Waves)",
          tracks: createTracks(
            [
              "3.2 Hz Healing Sleep (Binaural Beats)",
              "3 Hz Access to Unconscious Mind (Binaural Beats)",
              "2 Hz Dreamless Sleep (Binaural Beats)",
              "1 Hz Deep Sleep (Binaural Beats)",
              "0.5 Hz Delta Waves (Binaural Beats)"
            ],
            [
              "https://www.youtube.com/watch?v=FbpVaTBs4Jk",
              "https://www.youtube.com/watch?v=JvqTzQ0tb48",
              "https://www.youtube.com/watch?v=3kVSWGmUZ2A",
              "https://www.youtube.com/watch?v=i-B3bnCH87c",
              "https://www.youtube.com/watch?v=HbcNQlAl_Hho"
            ]
          )
        },
        {
          name: "Binaural Beats - Meditation (Theta Waves)",
          tracks: createTracks(
            [
              "7 Hz Meditation & Inner Peace (Binaural Beats)",
              "6 Hz Deep Relaxation (Binaural Beats)",
              "5 Hz Creativity (Binaural Beats)",
              "4.5 Hz REM Sleep (Binaural Beats)",
              "4 Hz Theta Waves (Binaural Beats)"
            ],
            [
              "https://www.youtube.com/watch?v=N8-U1KW_qW8",
              "https://www.youtube.com/watch?v=_E95KdGPNdA",
              "https://www.youtube.com/watch?v=bUQsd6g5sPY",
              "https://www.youtube.com/watch?v=Rn8DqNXcCpc",
              "https://www.youtube.com/watch?v=oNdiRdrQGlc"
            ]
          )
        },
        {
          name: "Binaural Beats - Focus (Alpha Waves)",
          tracks: createTracks(
            [
              "12.5 Hz Focus (Binaural Beats)",
              "12 Hz Super Learning (Binaural Beats)",
              "11 Hz Flow State (Binaural Beats)",
              "10 Hz Stress Reduction (Binaural Beats)",
              "8 Hz Alpha Waves (Binaural Beats)"
            ],
            [
              "https://www.youtube.com/watch?v=3gRvK1Bhe_c",
              "https://www.youtube.com/watch?v=Qd0HEXGug8I",
              "https://www.youtube.com/watch?v=PgYFPJyRi_o",
              "https://www.youtube.com/watch?v=K_pDXBgfwZk",
              "https://www.youtube.com/watch?v=Vvo5jmN8JKU"
            ]
          )
        },
        {
          name: "Binaural Beats - Concentration (Beta Waves)",
          tracks: createTracks(
            [
              "13 Hz Concentration (Binaural Beats)",
              "14 Hz Focused Attention (Binaural Beats)",
              "18 Hz Cognitive Thinking (Binaural Beats)",
              "20 Hz Problem Solving (Binaural Beats)",
              "30 Hz Beta Waves (Binaural Beats)"
            ],
            [
              "https://www.youtube.com/watch?v=3SoVy6Zrhro",
              "https://www.youtube.com/watch?v=BtIThDlOWw8",
              "https://www.youtube.com/watch?v=nz4_Cy5MWTo",
              "https://www.youtube.com/watch?v=pOvBenNg7Bo",
              "https://www.youtube.com/watch?v=4Egx3zwXu8Q"
            ]
          )
        },
        {
          name: "Binaural Beats - Peak Awareness (Gamma Waves)",
          tracks: createTracks(
            [
              "40 Hz Memory Recall (Binaural Beats)",
              "50 Hz High Level Cognition (Binaural Beats)",
              "60 Hz Transcendental States (Binaural Beats)",
              "70 Hz Peak Awareness (Binaural Beats)",
              "80 Hz Gamma Waves (Binaural Beats)"
            ],
            [
              "https://www.youtube.com/watch?v=YuqVAVq0I6c",
              "https://www.youtube.com/watch?v=6X8PjRaDei8",
              "https://www.youtube.com/watch?v=v0AK4icCqkc",
              "https://www.youtube.com/watch?v=ay1ekFL3unc",
              "https://www.youtube.com/watch?v=9Sz4OyAApZE"
            ]
          )
        },
        {
          name: "40 Hz Focus Music (Binaural Beats)",
          tracks: createTracks(
            [
              "40 Hz Binaural Beats",
              "40 Hz Study Music",
              "40 Hz Focus Frequency",
              "40 Hz Improve Memory",
              "40 Hz Increase Productivity",
              "40 Hz Flow State Thinking",
              "40 Hz Deep Focus",
              "40 Hz Gamma Waves",
              "40 Hz Increase Brain Power",
              "40 Hz Concentration Music"
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
              "https://www.youtube.com/watch?v=hcNQlAl_Hho"
            ]
          )
        }
      ]
    },
    {
      name: "432 Hz Collections",
      icon: "music",
      color: "coral-500",
      categories: [
        {
          name: "432 Hz Deep Sleep",
          tracks: createTracks(
            [
              "432 Hz Sleep Music",
              "432 Hz Deep Sleep",
              "432 Hz Insomnia Relief",
              "432 Hz Calm Your Mind",
              "432 Hz Fall Asleep",
              "432 Hz Manifest Miracles While You Sleep",
              "432 Hz Deep Healing Sleep",
              "432 Hz Sleep Frequency",
              "432 Hz Ambient Relaxation",
              "432 Hz Miracle Sleep Music"
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
              "https://www.youtube.com/watch?v=dZ7_GwBQ-EE"
            ]
          )
        },
        {
          name: "432 Hz Deep Healing",
          tracks: createTracks(
            [
              "432 Hz Miracle Sleep Tone",
              "432 Hz Deep Relaxation",
              "432 Hz Bring Down Heart Rate",
              "432 Hz Calm the Mind",
              "432 Hz Ease Anxiety",
              "432 Hz Healing Sleep Music",
              "432 Hz Raise Positive Energy",
              "432 Hz Deep Theta Meditation",
              "432 Hz Manifest Miracles",
              "432 Hz Elevate Your Vibration",
              "432 Hz Healing Music",
              "Healing Tone 432 Hz"
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
              "https://www.youtube.com/watch?v=ejz6ybdpkkI"
            ]
          )
        }
      ]
    },
    {
      name: "Special Frequencies",
      icon: "sparkles",
      color: "primary-600",
      categories: [
        {
          name: "777 Hz Attract Positivity",
          tracks: createTracks(
            [
              "777 Hz Manifest Positivity & Self-Confidence",
              "777 Hz Attract Luck & Abundance",
              "777 Hz Angelic Healing Frequency",
              "777 Hz Good Luck Magnet",
              "777 Hz Law of Attraction Frequency"
            ],
            [
              "https://www.youtube.com/watch?v=ZdclC2KLsc8",
              "https://www.youtube.com/watch?v=a_YLY0Wqu7E",
              "https://www.youtube.com/watch?v=qjH5vye_dMU",
              "https://www.youtube.com/watch?v=wqqmRQc7kOY",
              "https://www.youtube.com/watch?v=aTLAWvu1WV4"
            ]
          )
        },
        {
          name: "888 Hz Abundance Gate",
          tracks: createTracks(
            [
              "888 Hz Abundance Gate",
              "888 Hz Infinite Abundance, Love & Wealth",
              "888 Hz Sacred Geometry",
              "888 Hz Attract Wealth",
              "888 Hz Angel Number"
            ],
            [
              "https://www.youtube.com/watch?v=PL67e5aBpQo",
              "https://www.youtube.com/watch?v=LlqIuCW-5Z4",
              "https://www.youtube.com/watch?v=wXdnBrWFJlU",
              "https://www.youtube.com/watch?v=7KH06inLlK4",
              "https://www.youtube.com/watch?v=uLaVHV6jGKI"
            ]
          )
        }
      ]
    },
    {
      name: "Wellness & Healing",
      icon: "heart-pulse",
      color: "secondary-600",
      categories: [
        {
          name: "Anxiety Relief",
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
              "Enough"
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
              "https://www.youtube.com/watch?v=W1cHIqmlzmA"
            ]
          )
        }
      ]
    },
    {
      name: "Meditation & Mindfulness",
      icon: "brain",
      color: "coral-600",
      categories: [
        {
          name: "528 Hz Meditation Music",
          tracks: createTracks(
            [
              "528 Hz Love & Miracles",
              "528 Hz Bring Positive Transformation",
              "528 Hz Heal Golden Chakra",
              "528 Hz Manifest Your Greatness",
              "528 Hz Whole Body Regeneration",
              "528 Hz Emotional Healing",
              "528 Hz Raise Positive Vibrations",
              "528 Hz Manifest Love",
              "528 Hz Dreamscape for Positive Transformation",
              "528 Hz Meditation Music"
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
              "https://www.youtube.com/watch?v=uV6gabswn38"
            ]
          )
        },
        {
          name: "417 Hz Mindfulness",
          tracks: createTracks(
            [
              "417 Hz New Beginnings",
              "417 Hz Remove Negative Energy",
              "417 Hz Let Go of Mental Blockages",
              "417 Hz Cleanse Trauma",
              "417 Hz Undo Damage",
              "417 Hz Sacral Chakra",
              "417 Hz Positive Change",
              "417 Hz Transmutation",
              "417 Hz Find Inner Balance",
              "417 Hz Manifest Positive Energy"
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
              "https://www.youtube.com/watch?v=1td4VrDgmRw"
            ]
          )
        },
        {
          name: "639 Hz Heart Chakra Healing",
          tracks: createTracks(
            [
              "639 Hz Manifest Love & Miracles",
              "639 Hz Heart Chakra",
              "639 Hz Healing Relationships",
              "639 Hz Love Frequency",
              "639 Hz Attract Love",
              "639 Hz Heart Frequency",
              "639 Hz Pure Positive Energy",
              "639 Hz Solfeggio Frequency",
              "639 Hz Find Love",
              "639 Hz Frequency"
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
              "https://www.youtube.com/watch?v=-LOvUmYikgI"
            ]
          )
        }
      ]
    }
  ]
};

export default musicData;