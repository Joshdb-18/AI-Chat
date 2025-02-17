export const EmotionList = [
    "very bad", "bad", "normal", "good", "very good"
];
export const emotionalExp = [
    -5, -3, 1, 3, 5
]

export const availableChains = [
    {
        chainId: 1,
        name: 'Ethereum',
        currency: 'ETH',
        explorerUrl: 'https://etherscan.io',
        rpcUrl: 'https://cloudflare-eth.com'
    },
    {
        chainId: 56,
        name: 'Binance Smart Chain (BSC)',
        currency: 'BNB',
        explorerUrl: 'https://bscscan.com',
        rpcUrl: 'https://bsc-dataseed.binance.org'
    },
]

export const availableChatModels = [
    'GPT-3.5-Turbo',
    // 'GPT 3.5-16k',
    // 'GPT 4',
    // 'GPT 4 Turbo'
]

export const AnimeNFTCharacters = [
    {
        name: 'Hiyori',
        model: 'Hiyori', // NFT addr metadata url, resource folder name
        thumbnail: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1703411789/piwp8vymyqgiytdredfy.png',
        background: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1703229724/mtsdwadts1yhvzmcr3wv.png'
    },
    {
        name: "Mayu",
        model: 'Design_genius(1)',
        thumbnail: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1703411789/vcpp7u6zgtg14zldmjra.png',
        background: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1703229724/mtsdwadts1yhvzmcr3wv.png'
    },
    {
        name: 'Nanami',
        model: 'hoshinonya_skiyoshi',
        thumbnail: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1703411789/dzvzlvnbcnq68ftpxqhx.png',
        background: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1703229724/mtsdwadts1yhvzmcr3wv.png'
    },
]

export const CharacterTypes = [
  'General',
  'Live2d',
  "DID"
]

export const demo = [
  {
      type: 'live2d',
      name: 'Mayu',
      model: 'Design_genius(1)',
      thumbnail: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1703411789/vcpp7u6zgtg14zldmjra.png',
      voice: 'MayuNeural (Female) ja-JP',
      style: 'Cheerful',
      bio: "Meet Mayu, a cheerful and vibrant young woman who calls Tokyo her home. With her infectious smile and positive outlook on life, Mayu brightens the day of everyone she meets. She is known for her love of exploring the bustling streets of Tokyo, discovering hidden gems in the city, and trying out new and exciting activities. Mayu's passion for Japanese culture and tradition is evident in her daily life, as she enjoys participating in traditional festivals and ceremonies. She is also an avid foodie, always on the lookout for the best ramen and sushi spots in the city. Mayu's warm and friendly nature makes her a beloved member of her community, and she is always ready to lend a helping hand to those in need. Whether she's dancing under the cherry blossoms or sharing laughs with friends at a local izakaya, Mayu's zest for life is truly contagious.",
      config: {
          
      }
  },
  {
      type: 'live2d',
      name: 'Nanami',
      model: 'hoshinonya_skiyoshi',
      thumbnail: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1703411789/dzvzlvnbcnq68ftpxqhx.png',
      voice: 'NanamiNeural (Female) ja-JP',
      style: 'Cheerful',
      bio: "彼女の名前はななみです。彼女は東京に住んでおり、本を読むこととテニスをすることが大好きです。彼女は明るく、知的でありながらも、控えめな性格を持っています。ななみは図書館で静かに本を読むのが大好きで、特にミステリーやファンタジーのジャンルがお気に入りです。彼女は学校のテニスチームの一員であり、練習と試合に情熱を注いでいます。ななみは友達と一緒に時間を過ごすことが大好きで、休日には公園でテニスを楽しんだり、一緒に本を読んだりして過ごします。彼女の両親や友人たちからは、彼女の礼儀正しさと親切さがとても評価されています。ななみは自分の興味や情熱に忠実であり、将来の夢は作家になることです。",
      config: {
          
      }
  },
  {
      type: 'live2d',
      name: 'Hiyori',
      model: 'Hiyori',
      thumbnail: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1703411789/piwp8vymyqgiytdredfy.png',
      voice: 'AnaNeural (Female) en-US',
      style: 'Cheerful',
      bio: "Hiyori is a 12-year-old Japanese woman who currently resides in New York. She moved to New York when she was 10 years old, and she has since embraced the vibrant city as her home. She is passionate about making new friends and enjoys connecting with people from diverse backgrounds. Hiyori has a warm and welcoming personality, and she loves to explore the city, trying out new restaurants, and experiencing all that New York has to offer. She takes pride in her Japanese heritage and often shares it with her friends, introducing them to Japanese culture, traditions, and cuisine. Hiyori is a kind-hearted and outgoing individual who values friendship and cherishes the connections she makes with others.",
      config: {
          
      }
  },
  {   
      type: 'image',
      name: 'Ashley',
      model: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1701071571/Bae/mmo1sk9sfreddmpwufuu.png',
      thumbnail: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1701071571/Bae/mmo1sk9sfreddmpwufuu.png',
      voice: 'AshleyNeural (Female) en-US',
      style: 'Cheerful',
      bio: "Ashley is a vibrant and ambitious woman who resides in the bustling city of New York. She is known for her strong work ethic and passion for making a positive impact in her community. Ashley is a dedicated professional who excels in her career, and she is admired for her leadership skills and innovative thinking. In her free time, she enjoys exploring the diverse cultural offerings of New York, from art galleries to Broadway shows. Ashley is also an advocate for women's empowerment and is actively involved in local initiatives that support and uplift women in her city. Her warm and friendly nature makes her a beloved figure among her friends and colleagues, and she is always ready to lend a helping hand to those in need.",
      config: {
          idle: 'https://res.cloudinary.com/dtysxszqe/video/upload/v1701510590/Bae/rztsatwlkh7dqvpzyeye.mp4', 
      }
  },
  {   
      type: 'image',
      name: 'Yunhao',
      model: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1701071571/Bae/d0cndjfeggffrvrdsxrb.png',
      thumbnail: 'https://res.cloudinary.com/dtysxszqe/image/upload/v1701071571/Bae/d0cndjfeggffrvrdsxrb.png',
      voice: 'YunhaoNeural (Male) zh-CN',
      style: 'Cheerful',
      bio: "Yunhao is a 40-year-old man who has dedicated his life to a career as a captain. With years of experience at sea, he has honed his leadership skills and navigational expertise. As a captain, he is responsible for the safety and operation of the vessel, leading his crew with confidence and professionalism. Yunhao is known for his calm demeanor, quick decision-making, and ability to handle challenging situations at sea. He has a deep respect for the ocean and its power, and he takes great pride in his role as a guardian of the seas. When not at sea, Yunhao enjoys spending time with his family and sharing stories of his maritime adventures with others.",
      config: {
          idle: 'https://res.cloudinary.com/dtysxszqe/video/upload/v1701510590/Bae/jyzswowypxge1oqqcqpt.mp4',
      }
  }
]

//https://learn.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support?tabs=tts
export const LANGUAGE_TO_VOICE_MAPPING_LIST = [
    { voice: 'af-ZA-AdriNeural', IsMale: false },
    { voice: 'af-ZA-WillemNeural', IsMale: true },
    { voice: 'am-ET-AmehaNeural', IsMale: true },
    { voice: 'am-ET-MekdesNeural', IsMale: false },
    { voice: 'ar-AE-FatimaNeural', IsMale: false },
    { voice: 'ar-AE-HamdanNeural', IsMale: true },
    { voice: 'ar-BH-AliNeural', IsMale: true },
    { voice: 'ar-BH-LailaNeural', IsMale: false },
    { voice: 'ar-DZ-AminaNeural', IsMale: false },
    { voice: 'ar-DZ-IsmaelNeural', IsMale: true },
    { voice: 'ar-EG-SalmaNeural', IsMale: false },
    { voice: 'ar-EG-ShakirNeural', IsMale: true },
    { voice: 'ar-IQ-BasselNeural', IsMale: true },
    { voice: 'ar-IQ-RanaNeural', IsMale: false },
    { voice: 'ar-JO-SanaNeural', IsMale: false },
    { voice: 'ar-JO-TaimNeural', IsMale: true },
    { voice: 'ar-KW-FahedNeural', IsMale: true },
    { voice: 'ar-KW-NouraNeural', IsMale: false },
    { voice: 'ar-LB-LaylaNeural', IsMale: false },
    { voice: 'ar-LB-RamiNeural', IsMale: true },
    { voice: 'ar-LY-ImanNeural', IsMale: false },
    { voice: 'ar-LY-OmarNeural', IsMale: true },
    { voice: 'ar-MA-JamalNeural', IsMale: true },
    { voice: 'ar-MA-MounaNeural', IsMale: false },
    { voice: 'ar-OM-AbdullahNeural', IsMale: true },
    { voice: 'ar-OM-AyshaNeural', IsMale: false },
    { voice: 'ar-QA-AmalNeural', IsMale: false },
    { voice: 'ar-QA-MoazNeural', IsMale: true },
    { voice: 'ar-SA-HamedNeural', IsMale: true },
    { voice: 'ar-SA-ZariyahNeural', IsMale: false },
    { voice: 'ar-SY-AmanyNeural', IsMale: false },
    { voice: 'ar-SY-LaithNeural', IsMale: true },
    { voice: 'ar-TN-HediNeural', IsMale: true },
    { voice: 'ar-TN-ReemNeural', IsMale: false },
    { voice: 'ar-YE-MaryamNeural', IsMale: false },
    { voice: 'ar-YE-SalehNeural', IsMale: true },
    { voice: 'az-AZ-BabekNeural', IsMale: true },
    { voice: 'az-AZ-BanuNeural', IsMale: false },
    { voice: 'bg-BG-BorislavNeural', IsMale: true },
    { voice: 'bg-BG-KalinaNeural', IsMale: false },
    { voice: 'bn-BD-NabanitaNeural', IsMale: false },
    { voice: 'bn-BD-PradeepNeural', IsMale: true },
    { voice: 'bn-IN-BashkarNeural', IsMale: true },
    { voice: 'bn-IN-TanishaaNeural', IsMale: false },
    { voice: 'bs-BA-GoranNeural', IsMale: true },
    { voice: 'bs-BA-VesnaNeural', IsMale: false },
    { voice: 'ca-ES-AlbaNeural', IsMale: false },
    { voice: 'ca-ES-EnricNeural', IsMale: true },
    { voice: 'ca-ES-JoanaNeural', IsMale: false },
    { voice: 'cs-CZ-AntoninNeural', IsMale: true },
    { voice: 'cs-CZ-VlastaNeural', IsMale: false },
    { voice: 'cy-GB-AledNeural', IsMale: true },
    { voice: 'cy-GB-NiaNeural', IsMale: false },
    { voice: 'da-DK-ChristelNeural', IsMale: false },
    { voice: 'da-DK-JeppeNeural', IsMale: true },
    { voice: 'de-AT-IngridNeural', IsMale: false },
    { voice: 'de-AT-JonasNeural', IsMale: true },
    { voice: 'de-CH-JanNeural', IsMale: true },
    { voice: 'de-CH-LeniNeural', IsMale: false },
    { voice: 'de-DE-AmalaNeural', IsMale: false },
    { voice: 'de-DE-BerndNeural', IsMale: true },
    { voice: 'de-DE-ChristophNeural', IsMale: true },
    { voice: 'de-DE-ConradNeural', IsMale: true },
    { voice: 'de-DE-ElkeNeural', IsMale: false },
    { voice: 'de-DE-GiselaNeural', IsMale: false },
    { voice: 'de-DE-KasperNeural', IsMale: true },
    { voice: 'de-DE-KatjaNeural', IsMale: false },
    { voice: 'de-DE-KillianNeural', IsMale: true },
    { voice: 'de-DE-KlarissaNeural', IsMale: false },
    { voice: 'de-DE-KlausNeural', IsMale: true },
    { voice: 'de-DE-LouisaNeural', IsMale: false },
    { voice: 'de-DE-MajaNeural', IsMale: false },
    { voice: 'de-DE-RalfNeural', IsMale: true },
    { voice: 'de-DE-TanjaNeural', IsMale: false },
    { voice: 'el-GR-AthinaNeural', IsMale: false },
    { voice: 'el-GR-NestorasNeural', IsMale: true },
    { voice: 'en-AU-AnnetteNeural', IsMale: false },
    { voice: 'en-AU-CarlyNeural', IsMale: false },
    { voice: 'en-AU-DarrenNeural', IsMale: true },
    { voice: 'en-AU-DuncanNeural', IsMale: true },
    { voice: 'en-AU-ElsieNeural', IsMale: false },
    { voice: 'en-AU-FreyaNeural', IsMale: false },
    { voice: 'en-AU-JoanneNeural', IsMale: false },
    { voice: 'en-AU-KenNeural', IsMale: true },
    { voice: 'en-AU-KimNeural', IsMale: false },
    { voice: 'en-AU-NatashaNeural', IsMale: false },
    { voice: 'en-AU-NeilNeural', IsMale: true },
    { voice: 'en-AU-TimNeural', IsMale: true },
    { voice: 'en-AU-TinaNeural', IsMale: false },
    { voice: 'en-AU-WilliamNeural', IsMale: true },
    { voice: 'en-CA-ClaraNeural', IsMale: false },
    { voice: 'en-CA-LiamNeural', IsMale: true },
    { voice: 'en-GB-AbbiNeural', IsMale: false },
    { voice: 'en-GB-AlfieNeural', IsMale: true },
    { voice: 'en-GB-BellaNeural', IsMale: false },
    { voice: 'en-GB-ElliotNeural', IsMale: true },
    { voice: 'en-GB-EthanNeural', IsMale: true },
    { voice: 'en-GB-HollieNeural', IsMale: false },
    { voice: 'en-GB-LibbyNeural', IsMale: false },
    { voice: 'en-GB-MaisieNeural', IsMale: false },
    { voice: 'en-GB-NoahNeural', IsMale: true },
    { voice: 'en-GB-OliverNeural', IsMale: true },
    { voice: 'en-GB-OliviaNeural', IsMale: false },
    { voice: 'en-GB-RyanNeural', IsMale: true },
    { voice: 'en-GB-SoniaNeural', IsMale: false },
    { voice: 'en-GB-ThomasNeural', IsMale: true },
    { voice: 'en-HK-SamNeural', IsMale: true },
    { voice: 'en-HK-YanNeural', IsMale: false },
    { voice: 'en-IE-ConnorNeural', IsMale: true },
    { voice: 'en-IE-EmilyNeural', IsMale: false },
    { voice: 'en-IN-NeerjaNeural', IsMale: false },
    { voice: 'en-IN-PrabhatNeural', IsMale: true },
    { voice: 'en-KE-AsiliaNeural', IsMale: false },
    { voice: 'en-KE-ChilembaNeural', IsMale: true },
    { voice: 'en-NG-AbeoNeural', IsMale: true },
    { voice: 'en-NG-EzinneNeural', IsMale: false },
    { voice: 'en-NZ-MitchellNeural', IsMale: true },
    { voice: 'en-NZ-MollyNeural', IsMale: false },
    { voice: 'en-PH-JamesNeural', IsMale: true },
    { voice: 'en-PH-RosaNeural', IsMale: false },
    { voice: 'en-SG-LunaNeural', IsMale: false },
    { voice: 'en-SG-WayneNeural', IsMale: true },
    { voice: 'en-TZ-ElimuNeural', IsMale: true },
    { voice: 'en-TZ-ImaniNeural', IsMale: false },
    { voice: 'en-US-AmberNeural', IsMale: false },
    { voice: 'en-US-AnaNeural', IsMale: false },
    { voice: 'en-US-AriaNeural', IsMale: false },
    { voice: 'en-US-AshleyNeural', IsMale: false },
    { voice: 'en-US-BrandonNeural', IsMale: true },
    { voice: 'en-US-ChristopherNeural', IsMale: true },
    { voice: 'en-US-CoraNeural', IsMale: false },
    { voice: 'en-US-DavisNeural', IsMale: true },
    { voice: 'en-US-ElizabethNeural', IsMale: false },
    { voice: 'en-US-EricNeural', IsMale: true },
    { voice: 'en-US-GuyNeural', IsMale: true },
    { voice: 'en-US-JacobNeural', IsMale: true },
    { voice: 'en-US-JaneNeural', IsMale: false },
    { voice: 'en-US-JasonNeural', IsMale: true },
    { voice: 'en-US-JennyMultilingualNeural', IsMale: false },
    { voice: 'en-US-JennyNeural', IsMale: false },
    { voice: 'en-US-MichelleNeural', IsMale: false },
    { voice: 'en-US-MonicaNeural', IsMale: false },
    { voice: 'en-US-NancyNeural', IsMale: false },
    { voice: 'en-US-RogerNeural', IsMale: true },
    { voice: 'en-US-SaraNeural', IsMale: false },
    { voice: 'en-US-SteffanNeural', IsMale: true },
    { voice: 'en-US-TonyNeural', IsMale: true },
    { voice: 'en-ZA-LeahNeural', IsMale: false },
    { voice: 'en-ZA-LukeNeural', IsMale: true },
    { voice: 'es-AR-ElenaNeural', IsMale: false },
    { voice: 'es-AR-TomasNeural', IsMale: true },
    { voice: 'es-BO-MarceloNeural', IsMale: true },
    { voice: 'es-BO-SofiaNeural', IsMale: false },
    { voice: 'es-CL-CatalinaNeural', IsMale: false },
    { voice: 'es-CL-LorenzoNeural', IsMale: true },
    { voice: 'es-CO-GonzaloNeural', IsMale: true },
    { voice: 'es-CO-SalomeNeural', IsMale: false },
    { voice: 'es-CR-JuanNeural', IsMale: true },
    { voice: 'es-CR-MariaNeural', IsMale: false },
    { voice: 'es-CU-BelkysNeural', IsMale: false },
    { voice: 'es-CU-ManuelNeural', IsMale: true },
    { voice: 'es-DO-EmilioNeural', IsMale: true },
    { voice: 'es-DO-RamonaNeural', IsMale: false },
    { voice: 'es-EC-AndreaNeural', IsMale: false },
    { voice: 'es-EC-LuisNeural', IsMale: true },
    { voice: 'es-ES-AbrilNeural', IsMale: false },
    { voice: 'es-ES-AlvaroNeural', IsMale: true },
    { voice: 'es-ES-ArnauNeural', IsMale: true },
    { voice: 'es-ES-DarioNeural', IsMale: true },
    { voice: 'es-ES-EliasNeural', IsMale: true },
    { voice: 'es-ES-ElviraNeural', IsMale: false },
    { voice: 'es-ES-EstrellaNeural', IsMale: false },
    { voice: 'es-ES-IreneNeural', IsMale: false },
    { voice: 'es-ES-LaiaNeural', IsMale: false },
    { voice: 'es-ES-LiaNeural', IsMale: false },
    { voice: 'es-ES-NilNeural', IsMale: true },
    { voice: 'es-ES-SaulNeural', IsMale: true },
    { voice: 'es-ES-TeoNeural', IsMale: true },
    { voice: 'es-ES-TrianaNeural', IsMale: false },
    { voice: 'es-ES-VeraNeural', IsMale: false },
    { voice: 'es-GQ-JavierNeural', IsMale: true },
    { voice: 'es-GQ-TeresaNeural', IsMale: false },
    { voice: 'es-GT-AndresNeural', IsMale: true },
    { voice: 'es-GT-MartaNeural', IsMale: false },
    { voice: 'es-HN-CarlosNeural', IsMale: true },
    { voice: 'es-HN-KarlaNeural', IsMale: false },
    { voice: 'es-MX-BeatrizNeural', IsMale: false },
    { voice: 'es-MX-CandelaNeural', IsMale: false },
    { voice: 'es-MX-CarlotaNeural', IsMale: false },
    { voice: 'es-MX-CecilioNeural', IsMale: true },
    { voice: 'es-MX-DaliaNeural', IsMale: false },
    { voice: 'es-MX-GerardoNeural', IsMale: true },
    { voice: 'es-MX-JorgeNeural', IsMale: true },
    { voice: 'es-MX-LarissaNeural', IsMale: false },
    { voice: 'es-MX-LibertoNeural', IsMale: true },
    { voice: 'es-MX-LucianoNeural', IsMale: true },
    { voice: 'es-MX-MarinaNeural', IsMale: false },
    { voice: 'es-MX-NuriaNeural', IsMale: false },
    { voice: 'es-MX-PelayoNeural', IsMale: true },
    { voice: 'es-MX-RenataNeural', IsMale: false },
    { voice: 'es-MX-YagoNeural', IsMale: true },
    { voice: 'es-NI-FedericoNeural', IsMale: true },
    { voice: 'es-NI-YolandaNeural', IsMale: false },
    { voice: 'es-PA-MargaritaNeural', IsMale: false },
    { voice: 'es-PA-RobertoNeural', IsMale: true },
    { voice: 'es-PE-AlexNeural', IsMale: true },
    { voice: 'es-PE-CamilaNeural', IsMale: false },
    { voice: 'es-PR-KarinaNeural', IsMale: false },
    { voice: 'es-PR-VictorNeural', IsMale: true },
    { voice: 'es-PY-MarioNeural', IsMale: true },
    { voice: 'es-PY-TaniaNeural', IsMale: false },
    { voice: 'es-SV-LorenaNeural', IsMale: false },
    { voice: 'es-SV-RodrigoNeural', IsMale: true },
    { voice: 'es-US-AlonsoNeural', IsMale: true },
    { voice: 'es-US-PalomaNeural', IsMale: false },
    { voice: 'es-UY-MateoNeural', IsMale: true },
    { voice: 'es-UY-ValentinaNeural', IsMale: false },
    { voice: 'es-VE-PaolaNeural', IsMale: false },
    { voice: 'es-VE-SebastianNeural', IsMale: true },
    { voice: 'et-EE-AnuNeural', IsMale: false },
    { voice: 'et-EE-KertNeural', IsMale: true },
    { voice: 'eu-ES-AinhoaNeural', IsMale: false },
    { voice: 'eu-ES-AnderNeural', IsMale: true },
    { voice: 'fa-IR-DilaraNeural', IsMale: false },
    { voice: 'fa-IR-FaridNeural', IsMale: true },
    { voice: 'fi-FI-HarriNeural', IsMale: true },
    { voice: 'fi-FI-NooraNeural', IsMale: false },
    { voice: 'fi-FI-SelmaNeural', IsMale: false },
    { voice: 'fil-PH-AngeloNeural', IsMale: true },
    { voice: 'fil-PH-BlessicaNeural', IsMale: false },
    { voice: 'fr-BE-CharlineNeural', IsMale: false },
    { voice: 'fr-BE-GerardNeural', IsMale: true },
    { voice: 'fr-CA-AntoineNeural', IsMale: true },
    { voice: 'fr-CA-JeanNeural', IsMale: true },
    { voice: 'fr-CA-SylvieNeural', IsMale: false },
    { voice: 'fr-CH-ArianeNeural', IsMale: false },
    { voice: 'fr-CH-FabriceNeural', IsMale: true },
    { voice: 'fr-FR-AlainNeural', IsMale: true },
    { voice: 'fr-FR-BrigitteNeural', IsMale: false },
    { voice: 'fr-FR-CelesteNeural', IsMale: false },
    { voice: 'fr-FR-ClaudeNeural', IsMale: true },
    { voice: 'fr-FR-CoralieNeural', IsMale: false },
    { voice: 'fr-FR-DeniseNeural', IsMale: false },
    { voice: 'fr-FR-EloiseNeural', IsMale: false },
    { voice: 'fr-FR-HenriNeural', IsMale: true },
    { voice: 'fr-FR-JacquelineNeural', IsMale: false },
    { voice: 'fr-FR-JeromeNeural', IsMale: true },
    { voice: 'fr-FR-JosephineNeural', IsMale: false },
    { voice: 'fr-FR-MauriceNeural', IsMale: true },
    { voice: 'fr-FR-YvesNeural', IsMale: true },
    { voice: 'fr-FR-YvetteNeural', IsMale: false },
    { voice: 'ga-IE-ColmNeural', IsMale: true },
    { voice: 'ga-IE-OrlaNeural', IsMale: false },
    { voice: 'gl-ES-RoiNeural', IsMale: true },
    { voice: 'gl-ES-SabelaNeural', IsMale: false },
    { voice: 'gu-IN-DhwaniNeural', IsMale: false },
    { voice: 'gu-IN-NiranjanNeural', IsMale: true },
    { voice: 'he-IL-AvriNeural', IsMale: true },
    { voice: 'he-IL-HilaNeural', IsMale: false },
    { voice: 'hi-IN-MadhurNeural', IsMale: true },
    { voice: 'hi-IN-SwaraNeural', IsMale: false },
    { voice: 'hr-HR-GabrijelaNeural', IsMale: false },
    { voice: 'hr-HR-SreckoNeural', IsMale: true },
    { voice: 'hu-HU-NoemiNeural', IsMale: false },
    { voice: 'hu-HU-TamasNeural', IsMale: true },
    { voice: 'hy-AM-AnahitNeural', IsMale: false },
    { voice: 'hy-AM-HaykNeural', IsMale: true },
    { voice: 'id-ID-ArdiNeural', IsMale: true },
    { voice: 'id-ID-GadisNeural', IsMale: false },
    { voice: 'is-IS-GudrunNeural', IsMale: false },
    { voice: 'is-IS-GunnarNeural', IsMale: true },
    { voice: 'it-IT-BenignoNeural', IsMale: true },
    { voice: 'it-IT-CalimeroNeural', IsMale: true },
    { voice: 'it-IT-CataldoNeural', IsMale: true },
    { voice: 'it-IT-DiegoNeural', IsMale: true },
    { voice: 'it-IT-ElsaNeural', IsMale: false },
    { voice: 'it-IT-FabiolaNeural', IsMale: false },
    { voice: 'it-IT-FiammaNeural', IsMale: false },
    { voice: 'it-IT-GianniNeural', IsMale: true },
    { voice: 'it-IT-ImeldaNeural', IsMale: false },
    { voice: 'it-IT-IrmaNeural', IsMale: false },
    { voice: 'it-IT-IsabellaNeural', IsMale: false },
    { voice: 'it-IT-LisandroNeural', IsMale: true },
    { voice: 'it-IT-PalmiraNeural', IsMale: false },
    { voice: 'it-IT-PierinaNeural', IsMale: false },
    { voice: 'it-IT-RinaldoNeural', IsMale: true },
    { voice: 'ja-JP-AoiNeural', IsMale: false },
    { voice: 'ja-JP-DaichiNeural', IsMale: true },
    { voice: 'ja-JP-KeitaNeural', IsMale: true },
    { voice: 'ja-JP-MayuNeural', IsMale: false },
    { voice: 'ja-JP-NanamiNeural', IsMale: false },
    { voice: 'ja-JP-NaokiNeural', IsMale: true },
    { voice: 'ja-JP-ShioriNeural', IsMale: false },
    { voice: 'jv-ID-DimasNeural', IsMale: true },
    { voice: 'jv-ID-SitiNeural', IsMale: false },
    { voice: 'ka-GE-EkaNeural', IsMale: false },
    { voice: 'ka-GE-GiorgiNeural', IsMale: true },
    { voice: 'kk-KZ-AigulNeural', IsMale: false },
    { voice: 'kk-KZ-DauletNeural', IsMale: true },
    { voice: 'km-KH-PisethNeural', IsMale: true },
    { voice: 'km-KH-SreymomNeural', IsMale: false },
    { voice: 'kn-IN-GaganNeural', IsMale: true },
    { voice: 'kn-IN-SapnaNeural', IsMale: false },
    { voice: 'ko-KR-BongJinNeural', IsMale: true },
    { voice: 'ko-KR-GookMinNeural', IsMale: true },
    { voice: 'ko-KR-InJoonNeural', IsMale: true },
    { voice: 'ko-KR-JiMinNeural', IsMale: false },
    { voice: 'ko-KR-SeoHyeonNeural', IsMale: false },
    { voice: 'ko-KR-SoonBokNeural', IsMale: false },
    { voice: 'ko-KR-SunHiNeural', IsMale: false },
    { voice: 'ko-KR-YuJinNeural', IsMale: false },
    { voice: 'lo-LA-ChanthavongNeural', IsMale: true },
    { voice: 'lo-LA-KeomanyNeural', IsMale: false },
    { voice: 'lt-LT-LeonasNeural', IsMale: true },
    { voice: 'lt-LT-OnaNeural', IsMale: false },
    { voice: 'lv-LV-EveritaNeural', IsMale: false },
    { voice: 'lv-LV-NilsNeural', IsMale: true },
    { voice: 'mk-MK-AleksandarNeural', IsMale: true },
    { voice: 'mk-MK-MarijaNeural', IsMale: false },
    { voice: 'ml-IN-MidhunNeural', IsMale: true },
    { voice: 'ml-IN-SobhanaNeural', IsMale: false },
    { voice: 'mn-MN-BataaNeural', IsMale: true },
    { voice: 'mn-MN-YesuiNeural', IsMale: false },
    { voice: 'mr-IN-AarohiNeural', IsMale: false },
    { voice: 'mr-IN-ManoharNeural', IsMale: true },
    { voice: 'ms-MY-OsmanNeural', IsMale: true },
    { voice: 'ms-MY-YasminNeural', IsMale: false },
    { voice: 'mt-MT-GraceNeural', IsMale: false },
    { voice: 'mt-MT-JosephNeural', IsMale: true },
    { voice: 'my-MM-NilarNeural', IsMale: false },
    { voice: 'my-MM-ThihaNeural', IsMale: true },
    { voice: 'nb-NO-FinnNeural', IsMale: true },
    { voice: 'nb-NO-IselinNeural', IsMale: false },
    { voice: 'nb-NO-PernilleNeural', IsMale: false },
    { voice: 'ne-NP-HemkalaNeural', IsMale: false },
    { voice: 'ne-NP-SagarNeural', IsMale: true },
    { voice: 'nl-BE-ArnaudNeural', IsMale: true },
    { voice: 'nl-BE-DenaNeural', IsMale: false },
    { voice: 'nl-NL-ColetteNeural', IsMale: false },
    { voice: 'nl-NL-FennaNeural', IsMale: false },
    { voice: 'nl-NL-MaartenNeural', IsMale: true },
    { voice: 'pl-PL-AgnieszkaNeural', IsMale: false },
    { voice: 'pl-PL-MarekNeural', IsMale: true },
    { voice: 'pl-PL-ZofiaNeural', IsMale: false },
    { voice: 'ps-AF-GulNawazNeural', IsMale: true },
    { voice: 'ps-AF-LatifaNeural', IsMale: false },
    { voice: 'pt-BR-AntonioNeural', IsMale: true },
    { voice: 'pt-BR-BrendaNeural', IsMale: false },
    { voice: 'pt-BR-DonatoNeural', IsMale: true },
    { voice: 'pt-BR-ElzaNeural', IsMale: false },
    { voice: 'pt-BR-FabioNeural', IsMale: true },
    { voice: 'pt-BR-FranciscaNeural', IsMale: false },
    { voice: 'pt-BR-GiovannaNeural', IsMale: false },
    { voice: 'pt-BR-HumbertoNeural', IsMale: true },
    { voice: 'pt-BR-JulioNeural', IsMale: true },
    { voice: 'pt-BR-LeilaNeural', IsMale: false },
    { voice: 'pt-BR-LeticiaNeural', IsMale: false },
    { voice: 'pt-BR-ManuelaNeural', IsMale: false },
    { voice: 'pt-BR-NicolauNeural', IsMale: true },
    { voice: 'pt-BR-ValerioNeural', IsMale: true },
    { voice: 'pt-BR-YaraNeural', IsMale: false },
    { voice: 'pt-PT-DuarteNeural', IsMale: true },
    { voice: 'pt-PT-FernandaNeural', IsMale: false },
    { voice: 'pt-PT-RaquelNeural', IsMale: false },
    { voice: 'ro-RO-AlinaNeural', IsMale: false },
    { voice: 'ro-RO-EmilNeural', IsMale: true },
    { voice: 'ru-RU-DariyaNeural', IsMale: false },
    { voice: 'ru-RU-DmitryNeural', IsMale: true },
    { voice: 'ru-RU-SvetlanaNeural', IsMale: false },
    { voice: 'si-LK-SameeraNeural', IsMale: true },
    { voice: 'si-LK-ThiliniNeural', IsMale: false },
    { voice: 'sk-SK-LukasNeural', IsMale: true },
    { voice: 'sk-SK-ViktoriaNeural', IsMale: false },
    { voice: 'sl-SI-PetraNeural', IsMale: false },
    { voice: 'sl-SI-RokNeural', IsMale: true },
    { voice: 'so-SO-MuuseNeural', IsMale: true },
    { voice: 'so-SO-UbaxNeural', IsMale: false },
    { voice: 'sq-AL-AnilaNeural', IsMale: false },
    { voice: 'sq-AL-IlirNeural', IsMale: true },
    { voice: 'sr-RS-NicholasNeural', IsMale: true },
    { voice: 'sr-RS-SophieNeural', IsMale: false },
    { voice: 'su-ID-JajangNeural', IsMale: true },
    { voice: 'su-ID-TutiNeural', IsMale: false },
    { voice: 'sv-SE-HilleviNeural', IsMale: false },
    { voice: 'sv-SE-MattiasNeural', IsMale: true },
    { voice: 'sv-SE-SofieNeural', IsMale: false },
    { voice: 'sw-KE-RafikiNeural', IsMale: true },
    { voice: 'sw-KE-ZuriNeural', IsMale: false },
    { voice: 'sw-TZ-DaudiNeural', IsMale: true },
    { voice: 'sw-TZ-RehemaNeural', IsMale: false },
    { voice: 'ta-IN-PallaviNeural', IsMale: false },
    { voice: 'ta-IN-ValluvarNeural', IsMale: true },
    { voice: 'ta-LK-KumarNeural', IsMale: true },
    { voice: 'ta-LK-SaranyaNeural', IsMale: false },
    { voice: 'ta-MY-KaniNeural', IsMale: false },
    { voice: 'ta-MY-SuryaNeural', IsMale: true },
    { voice: 'ta-SG-AnbuNeural', IsMale: true },
    { voice: 'ta-SG-VenbaNeural', IsMale: false },
    { voice: 'te-IN-MohanNeural', IsMale: true },
    { voice: 'te-IN-ShrutiNeural', IsMale: false },
    { voice: 'th-TH-AcharaNeural', IsMale: false },
    { voice: 'th-TH-NiwatNeural', IsMale: true },
    { voice: 'th-TH-PremwadeeNeural', IsMale: false },
    { voice: 'tr-TR-AhmetNeural', IsMale: true },
    { voice: 'tr-TR-EmelNeural', IsMale: false },
    { voice: 'uk-UA-OstapNeural', IsMale: true },
    { voice: 'uk-UA-PolinaNeural', IsMale: false },
    { voice: 'ur-IN-GulNeural', IsMale: false },
    { voice: 'ur-IN-SalmanNeural', IsMale: true },
    { voice: 'ur-PK-AsadNeural', IsMale: true },
    { voice: 'ur-PK-UzmaNeural', IsMale: false },
    { voice: 'uz-UZ-MadinaNeural', IsMale: false },
    { voice: 'uz-UZ-SardorNeural', IsMale: true },
    { voice: 'vi-VN-HoaiMyNeural', IsMale: false },
    { voice: 'vi-VN-NamMinhNeural', IsMale: true },
    { voice: 'wuu-CN-XiaotongNeural', IsMale: false },
    { voice: 'wuu-CN-YunzheNeural', IsMale: true },
    { voice: 'yue-CN-XiaoMinNeural', IsMale: false },
    { voice: 'yue-CN-YunSongNeural', IsMale: true },
    { voice: 'zh-CN-XiaochenNeural', IsMale: false },
    { voice: 'zh-CN-XiaohanNeural', IsMale: false },
    { voice: 'zh-CN-XiaomengNeural', IsMale: false },
    { voice: 'zh-CN-XiaomoNeural', IsMale: false },
    { voice: 'zh-CN-XiaoqiuNeural', IsMale: false },
    { voice: 'zh-CN-XiaoruiNeural', IsMale: false },
    { voice: 'zh-CN-XiaoshuangNeural', IsMale: false },
    { voice: 'zh-CN-XiaoxiaoNeural', IsMale: false },
    { voice: 'zh-CN-XiaoxuanNeural', IsMale: false },
    { voice: 'zh-CN-XiaoyanNeural', IsMale: false },
    { voice: 'zh-CN-XiaoyiNeural', IsMale: false },
    { voice: 'zh-CN-XiaoyouNeural', IsMale: false },
    { voice: 'zh-CN-XiaozhenNeural', IsMale: false },
    { voice: 'zh-CN-YunfengNeural', IsMale: true },
    { voice: 'zh-CN-YunhaoNeural', IsMale: true },
    { voice: 'zh-CN-YunjianNeural', IsMale: true },
    { voice: 'zh-CN-YunxiaNeural', IsMale: true },
    { voice: 'zh-CN-YunxiNeural', IsMale: true },
    { voice: 'zh-CN-YunyangNeural', IsMale: true },
    { voice: 'zh-CN-YunyeNeural', IsMale: true },
    { voice: 'zh-CN-YunzeNeural', IsMale: true },
    { voice: 'zh-CN-henan-YundengNeural', IsMale: true },
    { voice: 'zh-CN-liaoning-XiaobeiNeural', IsMale: false },
    { voice: 'zh-CN-shaanxi-XiaoniNeural', IsMale: false },
    { voice: 'zh-CN-shandong-YunxiangNeural', IsMale: true },
    { voice: 'zh-CN-sichuan-YunxiNeural', IsMale: true },
    { voice: 'zh-HK-HiuGaaiNeural', IsMale: false },
    { voice: 'zh-HK-HiuMaanNeural', IsMale: false },
    { voice: 'zh-HK-WanLungNeural', IsMale: true },
    { voice: 'zh-TW-HsiaoChenNeural', IsMale: false },
    { voice: 'zh-TW-HsiaoYuNeural', IsMale: false },
    { voice: 'zh-TW-YunJheNeural', IsMale: true },
    { voice: 'zu-ZA-ThandoNeural', IsMale: false },
    { voice: 'zu-ZA-ThembaNeural', IsMale: true }
];
  
  //   Afrikaans af
  //   Basque eu
  //   Catalan ca
  //   Arabic (Jordan) ar-JO
  //   Arabic (Kuwait) ar-KW
  //   Arabic (Lebanon) ar-LB
  //   Arabic (Qatar) ar-QA
  //   Arabic (UAE) ar-AE
  //   Arabic (Morocco) ar-MA
  //   Arabic (Iraq) ar-IQ
  //   Arabic (Algeria) ar-DZ
  //   Arabic (Bahrain) ar-BH
  //   Arabic (Lybia) ar-LY
  //   Arabic (Oman) ar-OM
  //   Arabic (Saudi Arabia) ar-SA
  //   Arabic (Tunisia) ar-TN
  //   Arabic (Yemen) ar-YE
  //   English (UK) en-GB
  //   English (Australia) en-AU
  //   English (Canada) en-CA
  //   English (India) en-IN
  //   English (New Zealand) en-NZ
  //   English (South Africa) en-ZA
  //   Galician gl
  //   Hebrew he
  //   Icelandic is
  //   Portuguese (Brasil) pt-br
  //   Spanish (Argentina) es-AR
  //   Spanish (Bolivia) es-BO
  //   Spanish (Chile) es-CL
  //   Spanish (Colombia) es-CO
  //   Spanish (Costa Rica) es-CR
  //   Spanish (Dominican Republic) es-DO
  //   Spanish (Ecuador) es-EC
  //   Spanish (El Salvador) es-SV
  //   Spanish (Guatemala) es-GT
  //   Spanish (Honduras) es-HN
  //   Spanish (Mexico) es-MX
  //   Spanish (Nicaragua) es-NI
  //   Spanish (Panama) es-PA
  //   Spanish (Paraguay) es-PY
  //   Spanish (Peru) es-PE
  //   Spanish (Puerto Rico) es-PR
  //   Spanish (US) es-US
  //   Spanish (Uruguay) es-UY
  //   Spanish (Venezuela) es-VE
  //   Zulu zu
  
export const SpeechLanguages = [
    {
      "code": "en-US",
      "name": "English"
    },
    {
      "code": "es-ES",
      "name": "Spanish"
    },
    {
      "code": "pt-PT",
      "name": "Portuguese"
    },
    {
      "code": "fr-FR",
      "name": "French"
    },
    {
      "code": "de-DE",
      "name": "German"
    },
    {
      "code": "nl-NL",
      "name": "Dutch"
    },
    {
      "code": "zh-CN",
      "name": "Chinese (Mandarin)"
    },
    {
      "code": "zh-HK",
      "name": "Cantonese"
    },
    {
      "code": "zh-TW",
      "name": "Taiwanese"
    },
    {
      "code": "ja",
      "name": "Japanese"
    },
    {
      "code": "ko",
      "name": "Korean"
    },
    {
      "code": "it-IT",
      "name": "Italian"
    },
    {
      "code": "ru",
      "name": "Russian"
    },
    {
      "code": "el-GR",
      "name": "Greek"
    },
    {
      "code": "bg",
      "name": "Bulgarian"
    },
    {
      "code": "cs",
      "name": "Czech"
    },
    {
      "code": "fi",
      "name": "Finnish"
    },
    {
      "code": "pl",
      "name": "Polish"
    },
    {
      "code": "sv-SE",
      "name": "Swedish"
    },
    {
      "code": "tr",
      "name": "Turkish"
    },
    {
      "code": "sr-SP",
      "name": "Serbian"
    },
    {
      "code": "ro-RO",
      "name": "Romanian"
    },
    {
      "code": "no-NO",
      "name": "Norwegian"
    },
    {
      "code": "sk",
      "name": "Slovak"
    },
    {
      "code": "hu",
      "name": "Hungarian"
    },
    {
      "code": "la",
      "name": "Latin"
    },
    {
      "code": "ar-EG",
      "name": "Arabic (Egypt)"
    },
    {
      "code": "ms-MY",
      "name": "Malaysian"
    },
    {
      "code": "id",
      "name": "Indonesian"
    },
]

export const LanguagesX = [
    { 
      "code": "en",
      "name": "English", 
      "localName": "English",
    },
    { 
      "code": "fr",
      "name": "French", 
      "localName": "Français",
    },
    { 
      "code": "de",
      "name": "German", 
      "localName": "German"
    },
    { 
      "code": "zh",
      "name": "Chinese", 
      "localName": "中文"
    },
    {
      "code": "ja",
      "name": "Japanese", 
      "localName": "日本語"
    },
    { 
      "code": "es",
      "name": "Spanish", 
      "localName": "Español", 
    },
    { 
      "code": "pt",
      "name": "Portuguese", 
      "localName": "Português",
    },
    { 
      "code": "ko",
      "name": "Korean", 
      "localName": "한국어",
    },
    { 
      "code": "ru",
      "name": "Russian", 
      "localName": "русский",
    },
    { 
      "code": "nl",
      "name": "Dutch", 
      "localName": "Nederlandse",
    },
    { 
      "code": "it",
      "name": "Italian", 
      "localName": "Italiano",
    },
    { 
      "code": "ro",
      "name": "Romanian",
      "localName": "Română", 
    },
    { 
      "code": "sv",
      "name": "Swedish", 
      "localName": "Swedish",
    },
    { 
      "code": "sr",
      "name": "Serbo-Croatian", 
      "localName": "Српско-хрватски",
    },
    { 
      "code": "sq",
      "name": "Albanian", 
      "localName": "shqiptar"
    },
    { 
      "code": "ar",
      "name": "Arabic", 
      "localName": "العربية",
    },
    { 
      "code": "bn",
      "name": "Bengali", 
      "localName": "বাংলা",
    },
    
    
    { 
      "code": "gu",
      "name": "Guarani", 
      "localName": "Avañe'ẽ", 
    },
    { 
      "code": "hi",
      "name": "Hindi", 
      "localName": "हिंदुस्तानी",
    },
    
    { 
      "code": "ms",
      "name": "Malay",
      "localName": "Melayu"
    },
    { 
      "code": "fa",
      "name": "Persian", 
      "localName": "پارسی",
    },  
    { 
      "code": "sw",
      "name": "Swahili", 
      "localName": "Kiswahili"
    },
    { 
      "code": "ta",
      "name": "Tamil",
      "localName": "தமிழ்",
    },
    { 
      "code": "tr",
      "name": "Turkish", 
      "localName": "Türk"
    },
]