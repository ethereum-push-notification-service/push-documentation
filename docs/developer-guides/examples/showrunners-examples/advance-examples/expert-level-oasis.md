---
description: >-
  In this section, we will be looking into the more complex side of implementing
  channels built on top of showrunners.
---

# Expert Level - Oasis

HELLO!

Before going to the coding part directly, we used [MakerDAO ](https://docs.makerdao.com/)documentation for implementing [Oasis ](https://oasis.app/)channel.

### Use case for Notification

Sending notification for vaults which are at risk of liquidation. For implementing this we will be getting vault details of users and comparing it with the next price of that particular vaults.

Let's start building the channel -

### Step 1. Installing the dependencies

We need to install [@makerdao/dai](https://www.npmjs.com/package/@makerdao/dai) and [@makerdao/dai-plugin-mcd](https://www.npmjs.com/package/@makerdao/dai-plugin-mcd) packages into our repository using following command.

```
npm i @makerdao/dai-plugin-mcd @makerdao/dai
```

### Step 2 . Create a  folder

For starting with showrunners and setting it up follow this guide here. // need to add link

First we need to create a folder in `src/showrunners/<`_`your_channel_name>`_

### Step 3 . Adding necessary files into the folder

#### Adding [contarctAddress.json](https://github.com/ethereum-push-notification-service/epns-showrunners-framework/blob/main/src/showrunners/oasis/contractAddress.json) file

```
// Contains every vault address
{
  "CHANGELOG": "0xdA0Ab1e0017DEbCd72Be8599041a2aa3bA7e740F",
  "MULTICALL": "0x5e227AD1969Ea493B43F840cfF78d08a6fc17796",
  "FAUCET": "0x0000000000000000000000000000000000000000",
  "MCD_DEPLOY": "0xbaa65281c2FA2baAcb2cb550BA051525A480D3F4",
  "FLIP_FAB": "0x4ACdbe9dd0d00b36eC2050E805012b8Fc9974f2b",
  "CLIP_FAB": "0x0716F25fBaAae9b63803917b6125c10c313dF663",
  "CALC_FAB": "0xE1820A2780193d74939CcA104087CADd6c1aA13A",
  "LERP_FAB": "0x9175561733D138326FDeA86CdFdF53e92b588276",
  "JOIN_FAB": "0xf1738d22140783707Ca71CB3746e0dc7Bf2b0264",
  "MCD_GOV": "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
  "GOV_GUARD": "0x6eEB68B2C7A918f36B78E2DB80dcF279236DDFb8",
  "MCD_ADM": "0x0a3f6849f78076aefaDf113F5BED87720274dDC0",
  "VOTE_PROXY_FACTORY": "0x6FCD258af181B3221073A96dD90D1f7AE7eEc408",
  "VOTE_DELEGATE_PROXY_FACTORY": "0xD897F108670903D1d6070fcf818f9db3615AF272",
  "MCD_VAT": "0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B",
  "MCD_JUG": "0x19c0976f590D67707E62397C87829d896Dc0f1F1",
  "MCD_CAT": "0xa5679C04fc3d9d8b0AaB1F0ab83555b301cA70Ea",
  "MCD_DOG": "0x135954d155898D42C90D2a57824C690e0c7BEf1B",
  "MCD_VOW": "0xA950524441892A31ebddF91d3cEEFa04Bf454466",
  "MCD_JOIN_DAI": "0x9759A6Ac90977b93B58547b4A71c78317f391A28",
  "MCD_FLAP": "0xC4269cC7acDEdC3794b221aA4D9205F564e27f0d",
  "MCD_FLOP": "0xA41B6EF151E06da0e34B009B86E828308986736D",
  "MCD_PAUSE": "0xbE286431454714F511008713973d3B053A2d38f3",
  "MCD_PAUSE_PROXY": "0xBE8E3e3618f7474F8cB1d074A26afFef007E98FB",
  "MCD_GOV_ACTIONS": "0x4F5f0933158569c026d617337614d00Ee6589B6E",
  "MCD_DAI": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "MCD_SPOT": "0x65C79fcB50Ca1594B025960e539eD7A9a6D434A3",
  "MCD_POT": "0x197E90f9FAD81970bA7976f33CbD77088E5D7cf7",
  "MCD_END": "0xBB856d1742fD182a90239D7AE85706C2FE4e5922",
  "MCD_ESM": "0x29CfBd381043D00a98fD9904a431015Fef07af2f",
  "PROXY_ACTIONS": "0x82ecD135Dce65Fbc6DbdD0e4237E0AF93FFD5038",
  "PROXY_ACTIONS_END": "0x7AfF9FC9faD225e3c88cDA06BC56d8Aca774bC57",
  "PROXY_ACTIONS_DSR": "0x07ee93aEEa0a36FfF2A9B95dd22Bd6049EE54f26",
  "CDP_MANAGER": "0x5ef30b9986345249bc32d8928B7ee64DE9435E39",
  "DSR_MANAGER": "0x373238337Bfe1146fb49989fc222523f83081dDb",
  "GET_CDPS": "0x36a724Bd100c39f0Ea4D3A20F7097eE01A8Ff573",
  "ILK_REGISTRY": "0x5a464C28D19848f44199D003BeF5ecc87d090F87",
  "OSM_MOM": "0x76416A4d5190d071bfed309861527431304aA14f",
  "FLIPPER_MOM": "0xc4bE7F74Ee3743bDEd8E0fA218ee5cf06397f472",
  "CLIPPER_MOM": "0x79FBDF16b366DFb14F66cE4Ac2815Ca7296405A0",
  "MCD_IAM_AUTO_LINE": "0xC7Bdd1F2B16447dcf3dE045C4a039A60EC2f0ba3",
  "MCD_FLASH": "0x1EB4CF3A948E7D72A198fe073cCb8C7a948cD853",
  "PROXY_FACTORY": "0xA26e15C895EFc0616177B7c1e7270A4C7D51C997",
  "PROXY_REGISTRY": "0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4",
  "MCD_VEST_DAI": "0x2Cc583c0AaCDaC9e23CB601fDA8F1A0c56Cdcb71",
  "MCD_VEST_MKR": "0x0fC8D4f2151453ca0cA56f07359049c8f07997Bd",
  "MCD_VEST_MKR_TREASURY": "0x6D635c8d08a1eA2F1687a5E46b666949c977B7dd",
  "ETH": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  "PIP_ETH": "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763",
  "MCD_JOIN_ETH_A": "0x2F0b23f53734252Bda2277357e97e1517d6B042A",
  "MCD_CLIP_ETH_A": "0xc67963a226eddd77B91aD8c421630A1b0AdFF270",
  "MCD_CLIP_CALC_ETH_A": "0x7d9f92DAa9254Bbd1f479DBE5058f74C2381A898",
  "MCD_JOIN_ETH_B": "0x08638eF1A205bE6762A8b935F5da9b700Cf7322c",
  "MCD_CLIP_ETH_B": "0x71eb894330e8a4b96b8d6056962e7F116F50e06F",
  "MCD_CLIP_CALC_ETH_B": "0x19E26067c4a69B9534adf97ED8f986c49179dE18",
  "MCD_JOIN_ETH_C": "0xF04a5cC80B1E94C69B48f5ee68a08CD2F09A7c3E",
  "MCD_CLIP_ETH_C": "0xc2b12567523e3f3CBd9931492b91fe65b240bc47",
  "MCD_CLIP_CALC_ETH_C": "0x1c4fC274D12b2e1BBDF97795193D3148fCDa6108",
  "BAT": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
  "PIP_BAT": "0xB4eb54AF9Cc7882DF0121d26c5b97E802915ABe6",
  "MCD_JOIN_BAT_A": "0x3D0B1912B66114d4096F48A8CEe3A56C231772cA",
  "MCD_CLIP_BAT_A": "0x3D22e6f643e2F4c563fD9db22b229Cbb0Cd570fb",
  "MCD_CLIP_CALC_BAT_A": "0x2e118153D304a0d9C5838D5FCb70CEfCbEc81DC2",
  "USDC": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "PIP_USDC": "0x77b68899b99b686F415d074278a9a16b336085A0",
  "MCD_JOIN_USDC_A": "0xA191e578a6736167326d05c119CE0c90849E84B7",
  "MCD_CLIP_USDC_A": "0x046b1A5718da6A226D912cFd306BA19980772908",
  "MCD_CLIP_CALC_USDC_A": "0x0FCa4ba0B80123b5d22dD3C8BF595F3E561d594D",
  "MCD_JOIN_USDC_B": "0x2600004fd1585f7270756DDc88aD9cfA10dD0428",
  "MCD_CLIP_USDC_B": "0x5590F23358Fe17361d7E4E4f91219145D8cCfCb3",
  "MCD_CLIP_CALC_USDC_B": "0xD6FE411284b92d309F79e502Dd905D7A3b02F561",
  "MCD_JOIN_PSM_USDC_A": "0x0A59649758aa4d66E25f08Dd01271e891fe52199",
  "MCD_CLIP_PSM_USDC_A": "0x66609b4799fd7cE12BA799AD01094aBD13d5014D",
  "MCD_CLIP_CALC_PSM_USDC_A": "0xbeE028b5Fa9eb0aDAC5eeF7E5B13383172b91A4E",
  "MCD_PSM_USDC_A": "0x89B78CfA322F6C5dE0aBcEecab66Aee45393cC5A",
  "WBTC": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
  "PIP_WBTC": "0xf185d0682d50819263941e5f4EacC763CC5C6C42",
  "MCD_JOIN_WBTC_A": "0xBF72Da2Bd84c5170618Fbe5914B0ECA9638d5eb5",
  "MCD_CLIP_WBTC_A": "0x0227b54AdbFAEec5f1eD1dFa11f54dcff9076e2C",
  "MCD_CLIP_CALC_WBTC_A": "0x5f4CEa97ca1030C6Bd38429c8a0De7Cd4981C70A",
  "MCD_JOIN_WBTC_B": "0xfA8c996e158B80D77FbD0082BB437556A65B96E0",
  "MCD_CLIP_WBTC_B": "0xe30663C6f83A06eDeE6273d72274AE24f1084a22",
  "MCD_CLIP_CALC_WBTC_B": "0xeb911E99D7ADD1350DC39d84D60835BA9B287D96",
  "MCD_JOIN_WBTC_C": "0x7f62f9592b823331E012D3c5DdF2A7714CfB9de2",
  "MCD_CLIP_WBTC_C": "0x39F29773Dcb94A32529d0612C6706C49622161D1",
  "MCD_CLIP_CALC_WBTC_C": "0x4fa2A328E7f69D023fE83454133c273bF5ACD435",
  "TUSD": "0x0000000000085d4780B73119b644AE5ecd22b376",
  "PIP_TUSD": "0xeE13831ca96d191B688A670D47173694ba98f1e5",
  "MCD_JOIN_TUSD_A": "0x4454aF7C8bb9463203b66C816220D41ED7837f44",
  "MCD_CLIP_TUSD_A": "0x0F6f88f8A4b918584E3539182793a0C276097f44",
  "MCD_CLIP_CALC_TUSD_A": "0x059acdf311E38aAF77139638228d393Ff27639bF",
  "ZRX": "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
  "PIP_ZRX": "0x7382c066801E7Acb2299aC8562847B9883f5CD3c",
  "MCD_JOIN_ZRX_A": "0xc7e8Cd72BDEe38865b4F5615956eF47ce1a7e5D0",
  "MCD_CLIP_ZRX_A": "0xdc90d461E148552387f3aB3EBEE0Bdc58Aa16375",
  "MCD_CLIP_CALC_ZRX_A": "0xebe5e9D77b9DBBA8907A197f4c2aB00A81fb0C4e",
  "KNC": "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
  "PIP_KNC": "0xf36B79BD4C0904A5F350F1e4f776B81208c13069",
  "MCD_JOIN_KNC_A": "0x475F1a89C1ED844A08E8f6C50A00228b5E59E4A9",
  "MCD_CLIP_KNC_A": "0x006Aa3eB5E666D8E006aa647D4afAB212555Ddea",
  "MCD_CLIP_CALC_KNC_A": "0x82c41e2ADE28C066a5D3A1E3f5B444a4075C1584",
  "MANA": "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
  "PIP_MANA": "0x8067259EA630601f319FccE477977E55C6078C13",
  "MCD_JOIN_MANA_A": "0xA6EA3b9C04b8a38Ff5e224E7c3D6937ca44C0ef9",
  "MCD_CLIP_MANA_A": "0xF5C8176E1eB0915359E46DEd16E52C071Bb435c0",
  "MCD_CLIP_CALC_MANA_A": "0xABbCd14FeDbb2D39038327055D9e615e178Fd64D",
  "USDT": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  "PIP_USDT": "0x7a5918670B0C390aD25f7beE908c1ACc2d314A3C",
  "MCD_JOIN_USDT_A": "0x0Ac6A1D74E84C2dF9063bDDc31699FF2a2BB22A2",
  "MCD_CLIP_USDT_A": "0xFC9D6Dd08BEE324A5A8B557d2854B9c36c2AeC5d",
  "MCD_CLIP_CALC_USDT_A": "0x1Cf3DE6D570291CDB88229E70037d1705d5be748",
  "PAXUSD": "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
  "PAX": "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
  "PIP_PAXUSD": "0x043B963E1B2214eC90046167Ea29C2c8bDD7c0eC",
  "PIP_PAX": "0x043B963E1B2214eC90046167Ea29C2c8bDD7c0eC",
  "MCD_JOIN_PAXUSD_A": "0x7e62B7E279DFC78DEB656E34D6a435cC08a44666",
  "MCD_CLIP_PAXUSD_A": "0xBCb396Cd139D1116BD89562B49b9D1d6c25378B0",
  "MCD_CLIP_CALC_PAXUSD_A": "0xAB98De83840b8367046383D2Adef9959E130923e",
  "MCD_JOIN_PSM_PAX_A": "0x7bbd8cA5e413bCa521C2c80D8d1908616894Cf21",
  "MCD_CLIP_PSM_PAX_A": "0x5322a3551bc6a1b39d5D142e5e38Dc5B4bc5B3d2",
  "MCD_CLIP_CALC_PSM_PAX_A": "0xC19eAc21A4FccdD30812F5fF5FebFbD6817b7593",
  "MCD_PSM_PAX_A": "0x961Ae24a1Ceba861D1FDf723794f6024Dc5485Cf",
  "COMP": "0xc00e94Cb662C3520282E6f5717214004A7f26888",
  "PIP_COMP": "0xBED0879953E633135a48a157718Aa791AC0108E4",
  "MCD_JOIN_COMP_A": "0xBEa7cDfB4b49EC154Ae1c0D731E4DC773A3265aA",
  "MCD_CLIP_COMP_A": "0x2Bb690931407DCA7ecE84753EA931ffd304f0F38",
  "MCD_CLIP_CALC_COMP_A": "0x1f546560EAa70985d962f1562B65D4B182341a63",
  "LRC": "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
  "PIP_LRC": "0x9eb923339c24c40Bef2f4AF4961742AA7C23EF3a",
  "MCD_JOIN_LRC_A": "0x6C186404A7A238D3d6027C0299D1822c1cf5d8f1",
  "MCD_CLIP_LRC_A": "0x81C5CDf4817DBf75C7F08B8A1cdaB05c9B3f70F7",
  "MCD_CLIP_CALC_LRC_A": "0x6856CCA4c881CAf29B6563bA046C7Bb73121fb9d",
  "LINK": "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  "PIP_LINK": "0x9B0C694C6939b5EA9584e9b61C7815E8d97D9cC7",
  "MCD_JOIN_LINK_A": "0xdFccAf8fDbD2F4805C174f856a317765B49E4a50",
  "MCD_CLIP_LINK_A": "0x832Dd5f17B30078a5E46Fdb8130A68cBc4a74dC0",
  "MCD_CLIP_CALC_LINK_A": "0x7B1696677107E48B152e9Bf400293e98B7D86Eb1",
  "BAL": "0xba100000625a3754423978a60c9317c58a424e3D",
  "PIP_BAL": "0x3ff860c0F28D69F392543A16A397D0dAe85D16dE",
  "MCD_JOIN_BAL_A": "0x4a03Aa7fb3973d8f0221B466EefB53D0aC195f55",
  "MCD_CLIP_BAL_A": "0x6AAc067bb903E633A422dE7BE9355E62B3CE0378",
  "MCD_CLIP_CALC_BAL_A": "0x79564a41508DA86721eDaDac07A590b5A51B2c01",
  "YFI": "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
  "PIP_YFI": "0x5F122465bCf86F45922036970Be6DD7F58820214",
  "MCD_JOIN_YFI_A": "0x3ff33d9162aD47660083D7DC4bC02Fb231c81677",
  "MCD_CLIP_YFI_A": "0x9daCc11dcD0aa13386D295eAeeBBd38130897E6f",
  "MCD_CLIP_CALC_YFI_A": "0x1f206d7916Fd3B1b5B0Ce53d5Cab11FCebc124DA",
  "GUSD": "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
  "PIP_GUSD": "0xf45Ae69CcA1b9B043dAE2C83A5B65Bc605BEc5F5",
  "MCD_JOIN_GUSD_A": "0xe29A14bcDeA40d83675aa43B72dF07f649738C8b",
  "MCD_CLIP_GUSD_A": "0xa47D68b9dB0A0361284fA04BA40623fcBd1a263E",
  "MCD_CLIP_CALC_GUSD_A": "0xF7e80359Cb9C4E6D178E6689eD8A6A6f91060747",
  "MCD_JOIN_PSM_GUSD_A": "0x79A0FA989fb7ADf1F8e80C93ee605Ebb94F7c6A5",
  "MCD_CLIP_PSM_GUSD_A": "0xf93CC3a50f450ED245e003BFecc8A6Ec1732b0b2",
  "MCD_CLIP_CALC_PSM_GUSD_A": "0x7f67a68a0ED74Ea89A82eD9F243C159ed43a502a",
  "MCD_PSM_GUSD_A": "0x204659B2Fd2aD5723975c362Ce2230Fba11d3900",
  "UNI": "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
  "PIP_UNI": "0xf363c7e351C96b910b92b45d34190650df4aE8e7",
  "MCD_JOIN_UNI_A": "0x3BC3A58b4FC1CbE7e98bB4aB7c99535e8bA9b8F1",
  "MCD_CLIP_UNI_A": "0x3713F83Ee6D138Ce191294C131148176015bC29a",
  "MCD_CLIP_CALC_UNI_A": "0xeA7FE6610e6708E2AFFA202948cA19ace3F580AE",
  "RENBTC": "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
  "PIP_RENBTC": "0xf185d0682d50819263941e5f4EacC763CC5C6C42",
  "MCD_JOIN_RENBTC_A": "0xFD5608515A47C37afbA68960c1916b79af9491D0",
  "MCD_CLIP_RENBTC_A": "0x834719BEa8da68c46484E001143bDDe29370a6A3",
  "MCD_CLIP_CALC_RENBTC_A": "0xcC89F368aad8D424d3e759c1525065e56019a0F4",
  "AAVE": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
  "PIP_AAVE": "0x8Df8f06DC2dE0434db40dcBb32a82A104218754c",
  "MCD_JOIN_AAVE_A": "0x24e459F61cEAa7b1cE70Dbaea938940A7c5aD46e",
  "MCD_CLIP_AAVE_A": "0x8723b74F598DE2ea49747de5896f9034CC09349e",
  "MCD_CLIP_CALC_AAVE_A": "0x76024a8EfFCFE270e089964a562Ece6ea5f3a14C",
  "MATIC": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
  "PIP_MATIC": "0x8874964279302e6d4e523Fb1789981C39a1034Ba",
  "MCD_JOIN_MATIC_A": "0x885f16e177d45fC9e7C87e1DA9fd47A9cfcE8E13",
  "MCD_CLIP_MATIC_A": "0x29342F530ed6120BDB219D602DaFD584676293d1",
  "MCD_CLIP_CALC_MATIC_A": "0xdF8C347B06a31c6ED11f8213C2366348BFea68dB",
  "STETH": "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
  "WSTETH": "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
  "PIP_WSTETH": "0xFe7a2aC0B945f12089aEEB6eCebf4F384D9f043F",
  "MCD_JOIN_WSTETH_A": "0x10CD5fbe1b404B7E19Ef964B63939907bdaf42E2",
  "MCD_CLIP_WSTETH_A": "0x49A33A28C4C7D9576ab28898F4C9ac7e52EA457A",
  "MCD_CLIP_CALC_WSTETH_A": "0x15282b886675cc1Ce04590148f456428E87eaf13",
  "ADAI": "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
  "PIP_ADAI": "0x6A858592fC4cBdf432Fc9A1Bc8A0422B99330bdF",
  "MCD_JOIN_DIRECT_AAVEV2_DAI": "0xa13C0c8eB109F5A13c6c90FC26AFb23bEB3Fb04a",
  "MCD_CLIP_DIRECT_AAVEV2_DAI": "0xa93b98e57dDe14A3E301f20933d59DC19BF8212E",
  "MCD_CLIP_CALC_DIRECT_AAVEV2_DAI": "0x786DC9b69abeA503fd101a2A9fa95bcE82C20d0A",
  "DIRECT_MOM": "0x99A219f3dD2DeEC02c6324df5009aaa60bA36d38",
  "UNIV2DAIETH": "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11",
  "PIP_UNIV2DAIETH": "0xFc8137E1a45BAF0030563EC4F0F851bd36a85b7D",
  "MCD_JOIN_UNIV2DAIETH_A": "0x2502F65D77cA13f183850b5f9272270454094A08",
  "MCD_CLIP_UNIV2DAIETH_A": "0x9F6981bA5c77211A34B76c6385c0f6FA10414035",
  "MCD_CLIP_CALC_UNIV2DAIETH_A": "0xf738C272D648Cc4565EaFb43c0C5B35BbA3bf29d",
  "UNIV2WBTCETH": "0xBb2b8038a1640196FbE3e38816F3e67Cba72D940",
  "PIP_UNIV2WBTCETH": "0x8400D2EDb8B97f780356Ef602b1BdBc082c2aD07",
  "MCD_JOIN_UNIV2WBTCETH_A": "0xDc26C9b7a8fe4F5dF648E314eC3E6Dc3694e6Dd2",
  "MCD_CLIP_UNIV2WBTCETH_A": "0xb15afaB996904170f87a64Fe42db0b64a6F75d24",
  "MCD_CLIP_CALC_UNIV2WBTCETH_A": "0xC94ee71e909DbE08d63aA9e6EFbc9976751601B4",
  "UNIV2USDCETH": "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
  "PIP_UNIV2USDCETH": "0xf751f24DD9cfAd885984D1bA68860F558D21E52A",
  "MCD_JOIN_UNIV2USDCETH_A": "0x03Ae53B33FeeAc1222C3f372f32D37Ba95f0F099",
  "MCD_CLIP_UNIV2USDCETH_A": "0x93AE03815BAF1F19d7F18D9116E4b637cc32A131",
  "MCD_CLIP_CALC_UNIV2USDCETH_A": "0x022ff40643e8b94C43f0a1E54f51EF6D070AcbC4",
  "UNIV2DAIUSDC": "0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5",
  "PIP_UNIV2DAIUSDC": "0x25D03C2C928ADE19ff9f4FFECc07d991d0df054B",
  "MCD_JOIN_UNIV2DAIUSDC_A": "0xA81598667AC561986b70ae11bBE2dd5348ed4327",
  "MCD_CLIP_UNIV2DAIUSDC_A": "0x9B3310708af333f6F379FA42a5d09CBAA10ab309",
  "MCD_CLIP_CALC_UNIV2DAIUSDC_A": "0xbEF2ab2aA5CC780A03bccf22AD3320c8CF35af6A",
  "UNIV2ETHUSDT": "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
  "PIP_UNIV2ETHUSDT": "0x5f6dD5B421B8d92c59dC6D907C9271b1DBFE3016",
  "MCD_JOIN_UNIV2ETHUSDT_A": "0x4aAD139a88D2dd5e7410b408593208523a3a891d",
  "MCD_CLIP_UNIV2ETHUSDT_A": "0x2aC4C9b49051275AcB4C43Ec973082388D015D48",
  "MCD_CLIP_CALC_UNIV2ETHUSDT_A": "0xA475582E3D6Ec35091EaE81da3b423C1B27fa029",
  "UNIV2LINKETH": "0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974",
  "PIP_UNIV2LINKETH": "0xd7d31e62AE5bfC3bfaa24Eda33e8c32D31a1746F",
  "MCD_JOIN_UNIV2LINKETH_A": "0xDae88bDe1FB38cF39B6A02b595930A3449e593A6",
  "MCD_CLIP_UNIV2LINKETH_A": "0x6aa0520354d1b84e1C6ABFE64a708939529b619e",
  "MCD_CLIP_CALC_UNIV2LINKETH_A": "0x8aCeC2d937a4A4cAF42565aFbbb05ac242134F14",
  "UNIV2UNIETH": "0xd3d2E2692501A5c9Ca623199D38826e513033a17",
  "PIP_UNIV2UNIETH": "0x8462A88f50122782Cc96108F476deDB12248f931",
  "MCD_JOIN_UNIV2UNIETH_A": "0xf11a98339FE1CdE648e8D1463310CE3ccC3d7cC1",
  "MCD_CLIP_UNIV2UNIETH_A": "0xb0ece6F5542A4577E2f1Be491A937Ccbbec8479e",
  "MCD_CLIP_CALC_UNIV2UNIETH_A": "0xad609Ed16157014EF955C94553E40e94A09049f0",
  "UNIV2WBTCDAI": "0x231B7589426Ffe1b75405526fC32aC09D44364c4",
  "PIP_UNIV2WBTCDAI": "0x5bB72127a196392cf4aC00Cf57aB278394d24e55",
  "MCD_JOIN_UNIV2WBTCDAI_A": "0xD40798267795Cbf3aeEA8E9F8DCbdBA9b5281fcC",
  "MCD_CLIP_UNIV2WBTCDAI_A": "0x4fC53a57262B87ABDa61d6d0DB2bE7E9BE68F6b8",
  "MCD_CLIP_CALC_UNIV2WBTCDAI_A": "0x863AEa7D2c4BF2B5Aa191B057240b6Dc29F532eB",
  "UNIV2AAVEETH": "0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f",
  "PIP_UNIV2AAVEETH": "0x32d8416e8538Ac36272c44b0cd962cD7E0198489",
  "MCD_JOIN_UNIV2AAVEETH_A": "0x42AFd448Df7d96291551f1eFE1A590101afB1DfF",
  "MCD_CLIP_UNIV2AAVEETH_A": "0x854b252BA15eaFA4d1609D3B98e00cc10084Ec55",
  "MCD_CLIP_CALC_UNIV2AAVEETH_A": "0x5396e541E1F648EC03faf338389045F1D7691960",
  "UNIV2DAIUSDT": "0xB20bd5D04BE54f870D5C0d3cA85d82b34B836405",
  "PIP_UNIV2DAIUSDT": "0x9A1CD705dc7ac64B50777BcEcA3529E58B1292F1",
  "MCD_JOIN_UNIV2DAIUSDT_A": "0xAf034D882169328CAf43b823a4083dABC7EEE0F4",
  "MCD_CLIP_UNIV2DAIUSDT_A": "0xe4B82Be84391b9e7c56a1fC821f47569B364dd4a",
  "MCD_CLIP_CALC_UNIV2DAIUSDT_A": "0x4E88cE740F6bEa31C2b14134F6C5eB2a63104fcF",
  "GUNIV3DAIUSDC1": "0xAbDDAfB225e10B90D798bB8A886238Fb835e2053",
  "PIP_GUNIV3DAIUSDC1": "0x7F6d78CC0040c87943a0e0c140De3F77a273bd58",
  "MCD_JOIN_GUNIV3DAIUSDC1_A": "0xbFD445A97e7459b0eBb34cfbd3245750Dba4d7a4",
  "MCD_CLIP_GUNIV3DAIUSDC1_A": "0x5048c5Cd3102026472f8914557A1FD35c8Dc6c9e",
  "MCD_CLIP_CALC_GUNIV3DAIUSDC1_A": "0x25B17065b94e3fDcD97d94A2DA29E7F77105aDd7",
  "GUNIV3DAIUSDC2": "0x50379f632ca68D36E50cfBC8F78fe16bd1499d1e",
  "PIP_GUNIV3DAIUSDC2": "0xcCBa43231aC6eceBd1278B90c3a44711a00F4e93",
  "MCD_JOIN_GUNIV3DAIUSDC2_A": "0xA7e4dDde3cBcEf122851A7C8F7A55f23c0Daf335",
  "MCD_CLIP_GUNIV3DAIUSDC2_A": "0xB55da3d3100C4eBF9De755b6DdC24BF209f6cc06",
  "MCD_CLIP_CALC_GUNIV3DAIUSDC2_A": "0xef051Ca2A2d809ba47ee0FC8caaEd06E3D832225",
  "MIP21_LIQUIDATION_ORACLE": "0x88f88Bb9E66241B73B84f3A6E197FbBa487b1E30",
  "RWA001": "0x10b2aA5D77Aa6484886d8e244f0686aB319a270d",
  "PIP_RWA001": "0x76A9f30B45F4ebFD60Ce8a1c6e963b1605f7cB6d",
  "MCD_JOIN_RWA001_A": "0x476b81c12Dc71EDfad1F64B9E07CaA60F4b156E2",
  "RWA001_A_URN": "0xa3342059BcDcFA57a13b12a35eD4BBE59B873005",
  "RWA001_A_INPUT_CONDUIT": "0x486C85e2bb9801d14f6A8fdb78F5108a0fd932f2",
  "RWA001_A_OUTPUT_CONDUIT": "0xb3eFb912e1cbC0B26FC17388Dd433Cecd2206C3d",
  "RWA002": "0xAAA760c2027817169D7C8DB0DC61A2fb4c19AC23",
  "PIP_RWA002": "0xd2473237E20Bd52F8E7cE0FD79403A6a82fbAEC8",
  "MCD_JOIN_RWA002_A": "0xe72C7e90bc26c11d45dBeE736F0acf57fC5B7152",
  "RWA002_A_URN": "0x225B3da5BE762Ee52B182157E67BeA0b31968163",
  "RWA002_A_INPUT_CONDUIT": "0x2474F297214E5d96Ba4C81986A9F0e5C260f445D",
  "RWA002_A_OUTPUT_CONDUIT": "0x2474F297214E5d96Ba4C81986A9F0e5C260f445D",
  "RWA003": "0x07F0A80aD7AeB7BfB7f139EA71B3C8f7E17156B9",
  "PIP_RWA003": "0xDeF7E88447F7D129420FC881B2a854ABB52B73B8",
  "MCD_JOIN_RWA003_A": "0x1Fe789BBac5b141bdD795A3Bc5E12Af29dDB4b86",
  "RWA003_A_URN": "0x7bF825718e7C388c3be16CFe9982539A7455540F",
  "RWA003_A_INPUT_CONDUIT": "0x2A9798c6F165B6D60Cfb923Fe5BFD6f338695D9B",
  "RWA003_A_OUTPUT_CONDUIT": "0x2A9798c6F165B6D60Cfb923Fe5BFD6f338695D9B",
  "RWA004": "0x873F2101047A62F84456E3B2B13df2287925D3F9",
  "PIP_RWA004": "0x5eEE1F3d14850332A75324514CcbD2DBC8Bbc566",
  "MCD_JOIN_RWA004_A": "0xD50a8e9369140539D1c2D113c4dC1e659c6242eB",
  "RWA004_A_URN": "0xeF1699548717aa4Cf47aD738316280b56814C821",
  "RWA004_A_INPUT_CONDUIT": "0xe1ed3F588A98bF8a3744f4BF74Fd8540e81AdE3f",
  "RWA004_A_OUTPUT_CONDUIT": "0xe1ed3F588A98bF8a3744f4BF74Fd8540e81AdE3f",
  "RWA005": "0x6DB236515E90fC831D146f5829407746EDdc5296",
  "PIP_RWA005": "0x8E6039C558738eb136833aB50271ae065c700d2B",
  "MCD_JOIN_RWA005_A": "0xA4fD373b93aD8e054970A3d6cd4Fd4C31D08192e",
  "RWA005_A_URN": "0xc40907545C57dB30F01a1c2acB242C7c7ACB2B90",
  "RWA005_A_INPUT_CONDUIT": "0x5b702e1fEF3F556cbe219eE697D7f170A236cc66",
  "RWA005_A_OUTPUT_CONDUIT": "0x5b702e1fEF3F556cbe219eE697D7f170A236cc66",
  "RWA006": "0x4EE03cfBF6E784c462839f5954d60f7C2B60b113",
  "PIP_RWA006": "0xB8AeCF04Fdf22Ef6C0c6b6536896e1F2870C41D3",
  "MCD_JOIN_RWA006_A": "0x5E11E34b6745FeBa9449Ae53c185413d6EdC66BE",
  "RWA006_A_URN": "0x0C185bf5388DdfDB288F4D875265d456D18FD9Cb",
  "RWA006_A_INPUT_CONDUIT": "0x8Fe38D1E4293181273E2e323e4c16e0D1d4861e3",
  "RWA006_A_OUTPUT_CONDUIT": "0x8Fe38D1E4293181273E2e323e4c16e0D1d4861e3",
  "PROXY_PAUSE_ACTIONS": "0x6bda13D43B7EDd6CAfE1f70fB98b5d40f61A1370",
  "PROXY_DEPLOYER": "0x1b93556AB8dcCEF01Cd7823C617a6d340f53Fb58",
  "OPTIMISM_DAI_BRIDGE": "0x10E6593CDda8c58a1d0f14C5164B376352a55f2F",
  "OPTIMISM_ESCROW": "0x467194771dAe2967Aef3ECbEDD3Bf9a310C76C65",
  "OPTIMISM_GOV_RELAY": "0x09B354CDA89203BB7B3131CC728dFa06ab09Ae2F",
  "ARBITRUM_DAI_BRIDGE": "0xD3B5b60020504bc3489D6949d545893982BA3011",
  "ARBITRUM_ESCROW": "0xA10c7CE4b876998858b1a9E12b10092229539400",
  "ARBITRUM_GOV_RELAY": "0x9ba25c289e351779E0D481Ba37489317c34A899d"
}

```

This file contains every vault address and by so, we will be fetching next price of every vault.

#### Adding [oasisChannel.ts](https://github.com/ethereum-push-notification-service/epns-showrunners-framework/blob/main/src/showrunners/oasis/oasisChannel.ts) file

```
import { Service, Inject, Container } from 'typedi';
import config, { defaultSdkSettings, settings } from '../../config';

import Maker from '@makerdao/dai';
import McdPlugin from '@makerdao/dai-plugin-mcd';
import { EPNSChannel } from '../../helpers/epnschannel';
import { Logger } from 'winston';
import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';
import mainnetAddress from './contractAddress.json';

@Service()
export default class oasisChannel extends EPNSChannel {
  constructor(@Inject('logger') public logger: Logger, @Inject('cached') public cached) {
    super(logger, {
      sdkSettings: {
        epnsCoreSettings: defaultSdkSettings.epnsCoreSettings,
        epnsCommunicatorSettings: defaultSdkSettings.epnsCommunicatorSettings,
        networkSettings: defaultSdkSettings.networkSettings,
      },
      networkToMonitor: config.web3MainnetNetwork,
      dirname: __dirname,
      name: 'Oasis',
      url: 'https://oasis.app/',
      useOffChain: true,
    });
  }

  async getOraclePrice(provider, pipAddress, slot) {
    const storageHexToBigNumber = (uint256: string) => {
      const matches = uint256.match(/^0x(\w+)$/);
      if (!matches?.length) {
        throw new Error(`invalid uint256: ${uint256}`);
      }

      const match = matches[0];
      return match.length <= 32
        ? [new BigNumber(0), new BigNumber(uint256)]
        : [
            new BigNumber(`0x${match.substring(0, match.length - 32)}`),
            new BigNumber(`0x${match.substring(match.length - 32, match.length)}`),
          ];
    };
    const slotCurrent = slot;
    const priceHex = await provider.getStorageAt(pipAddress, slotCurrent);
    const p = storageHexToBigNumber(priceHex);
    return p[1].shiftedBy(-18);
  }

  public async getLatestPrices() {
    this.logInfo(`getLatestPrices()`);
    let priceObject = {};

    const provider = ethers.getDefaultProvider(
      this.cSettings.networkToMonitor,
      this.cSettings.sdkSettings.networkSettings,
    );

    for (const property in mainnetAddress) {
      if (property.includes('PIP_')) {
        const currPrice = await this.getOraclePrice(provider, mainnetAddress[property], 3);
        const nextPrice = await this.getOraclePrice(provider, mainnetAddress[property], 4);
        priceObject[property.slice(4)] = { currPrice: currPrice.toFormat(2), nextPrice: nextPrice.toFormat(2) };
      }
    }
    this.log(priceObject);
    return priceObject;
  }

  public async sendMessageToContract(simulate) {
    this.logInfo(`Looking at vaults for liquidation alert`);
    this.logInfo(`Initialising maker and mcd manager`);
    try {
      const maker = await Maker.create('http', {
        plugins: [McdPlugin],
        url: `https://mainnet.infura.io/v3/${settings.infuraSettings.projectID}`,
      });
      const manager = maker.service('mcd:cdpManager');
      const sdk = await this.getSdk();
      const users = simulate?.logicOverride?.mode ? [simulate?.logicOverride?.address] : await sdk.getSubscribedUsers();
      const priceMapping = await this.getLatestPrices();
      for (let i in users) {
        const user = users[i];
        //fetch proxy address set by Oasis:
        const proxyAddress = await maker.service('proxy').getProxyAddress(user);
        if (!proxyAddress) {
          this.logInfo(`User has used Oasis`);

          await this.getVaultDetails(user, proxyAddress, manager, sdk, priceMapping, simulate);
        } else {
          this.logInfo(`User has not used Oasis`);
          continue;
        }
      }
      this.logInfo(`Finished Oasis logic`);
    } catch (error) {
      this.logInfo(`${settings.infuraSettings.projectID}`);
      this.logError(error);
    }
  }

  // take collaterl amount
  // multiply with next price and divide it by debtValue for getting the collateralization ratio

  public async getVaultDetails(
    user: String,
    proxyAddress: String,
    manager: any,
    sdk: any,
    priceMapping: any,
    simulate,
  ) {
    try {
      this.logInfo(`[Oasis]- Checking for ${user}`);
      //fetch all vaults
      const data = await manager.getCdpIds(user);
      this.log(data);
      for (let i in data) {
        //fetch details of each vault

        const vault = await manager.getCdp(data[i].id);
        const ilk = vault.ilk;
        const nextPriceVault = parseFloat(priceMapping[ilk.slice(0, -2)].nextPrice.replace(/,/g, ''));

        const vaultid = vault.id;
        const collateralAmount = parseFloat(vault.collateralAmount); // amount of collateral tokens
        const debtValue = parseFloat(vault.debtValue); // amount of Dai debt
        const collateralizationRatio = parseFloat(vault.collateralizationRatio); // collateralValue / debt
        const liquidationPrice = parseFloat(vault.liquidationPrice); // vault becomes unsafe at this price
        const isSafe = vault.isSafe; //bool value if vault is safe or not
        const collateralizationNextPrice = (nextPriceVault * collateralAmount * 100) / debtValue;
        const liquidationRatio = (liquidationPrice * collateralAmount) / debtValue;

        if (debtValue !== 0) {
          this.logInfo(`liquidationRatio : ${liquidationRatio}`);
          this.logInfo(`collateralizationNextPrice : ${collateralizationNextPrice}`);
          this.logInfo(`isSafe : ${isSafe}`);
          this.logInfo(`nextPriceVault : ${isSafe}`);
          this.logInfo(`collateralAmount : ${vault.collateralAmount}`);
          this.logInfo(`Vault : ${vault.ilk}`);
          if (isSafe && collateralizationNextPrice <= 175) {
            this.logInfo(`Vault is safe but is at risk of liquidation`);

            await this.sendOasisNotification(
              user,
              vaultid,
              1,
              collateralizationNextPrice,
              liquidationRatio * 100,
              ilk,
              simulate,
            );
          } else if (!isSafe) {
            this.logInfo(`Vault is unsafe`);
            await this.sendOasisNotification(user, vaultid, 2, null, null, ilk, simulate);
          }
        } else {
          this.logInfo('Debt Value is 0 for this vault!');
        }
      }
    } catch (err) {
      this.logError(err);
    }
  }

  public async sendOasisNotification(
    user,
    vaultid,
    type,
    collateralizationRatio = null,
    liquidationRatio = null,
    ilk,
    simulate,
  ) {
    let title, message, payloadTitle, payloadMsg, notifType, cta, storageType, trxConfirmWait, payload, ipfsHash, tx;
    const sdk = await this.getSdk();
    const epns = sdk.advanced.getInteractableContracts(
      config.web3RopstenNetwork,
      settings,
      this.walletKey,
      config.deployedContract,
      config.deployedContractABI,
    );
    cta = `https://oasis.app/${vaultid}`;

    switch (type) {
      case 1: //for funds about to get liquidated
        this.logger.info(`+ Sending notification for vault ${vaultid} which is at risk of liquidation`);
        title = `Vault ${vaultid} is at Risk`;
        // message = `Your Vault ${ilk} ${vaultid} is ${Math.floor(percent)}% away from liquidation `
        message = `Your ${ilk} Vault ${vaultid} has reached a collateralization ratio of ${collateralizationRatio.toFixed()}%.\nThe liquidation ratio for this vault is ${liquidationRatio.toFixed()}%.\nClick here to visit your vault!`;
        payloadTitle = `Vault ${vaultid} is at Risk`;
        // payloadMsg = `Your Vault [t:${ilk}] [d:${vaultid}] is [s:${percent}]% away from liquidation [timestamp: ${Math.floor(new Date() / 1000)}]`;
        payloadMsg = `Your [t:${ilk}] Vault [d:${vaultid}] has reached a collateralization ratio of [s:${collateralizationRatio.toFixed()}%].\nThe liquidation ratio for this vault is [b:${liquidationRatio.toFixed()}]%.\n\nClick here to visit your vault!`;

        notifType = 3;
        storageType = 1;
        trxConfirmWait = 0;
        await this.sendNotification({
          recipient: user,
          notificationType: notifType,
          title: title,
          message: message,
          payloadTitle: payloadTitle,
          payloadMsg: payloadMsg,
          image: null,
          simulate: simulate,
        });

      case 2: //for funds that are below LR
        this.logger.info(
          `[${new Date(Date.now())}]-[Oasis]- Sending notification for vault ${vaultid} which is undercollateralised`,
        );
        title = `Vault ${vaultid} is at Risk`;
        message = `Your Vault ${ilk} ${vaultid} is below liquidation ratio.`;
        payloadTitle = `Vault ${vaultid} is at Risk`;
        payloadMsg = `Your Vault [t:${ilk}] [d:${vaultid}] is below liquidation ratio. [timestamp: ${Math.floor(
          Date.now() / 1000,
        )}]`;
        notifType = 3;
        storageType = 1;
        trxConfirmWait = 0;

        await this.sendNotification({
          recipient: user,
          notificationType: notifType,
          title: title,
          message: message,
          payloadTitle: payloadTitle,
          payloadMsg: payloadMsg,
          image: null,
          simulate: simulate,
        });
    }
  }
}

```

Let's understand this code by sections -

```
import { Service, Inject, Container } from 'typedi';
import config, { defaultSdkSettings, settings } from '../../config';

import Maker from '@makerdao/dai';
import McdPlugin from '@makerdao/dai-plugin-mcd';
import { EPNSChannel } from '../../helpers/epnschannel';
import { Logger } from 'winston';
import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';
import mainnetAddress from './contractAddress.json';
```

Here we are importing all the necessary files and packages for our channel file to gear up.

```
// fetching next price from contract storage
async getOraclePrice(provider, pipAddress, slot) {
    const storageHexToBigNumber = (uint256: string) => {
      const matches = uint256.match(/^0x(\w+)$/);
      if (!matches?.length) {
        throw new Error(`invalid uint256: ${uint256}`);
      }

      const match = matches[0];
      return match.length <= 32
        ? [new BigNumber(0), new BigNumber(uint256)]
        : [
            new BigNumber(`0x${match.substring(0, match.length - 32)}`),
            new BigNumber(`0x${match.substring(match.length - 32, match.length)}`),
          ];
    };
    const slotCurrent = slot;
    const priceHex = await provider.getStorageAt(pipAddress, slotCurrent);
    const p = storageHexToBigNumber(priceHex);
    return p[1].shiftedBy(-18);
  }
```

This set of code is used to fetch the next price for every vault from their respective oracles.

```
// fetching next price for every vault and storing into a mapping.
public async getLatestPrices() {
    this.logInfo(`getLatestPrices()`);
    let priceObject = {};

    const provider = ethers.getDefaultProvider(
      this.cSettings.networkToMonitor,
      this.cSettings.sdkSettings.networkSettings,
    );

    for (const property in mainnetAddress) {
      if (property.includes('PIP_')) {
        const currPrice = await this.getOraclePrice(provider, mainnetAddress[property], 3);
        const nextPrice = await this.getOraclePrice(provider, mainnetAddress[property], 4);
        priceObject[property.slice(4)] = { currPrice: currPrice.toFormat(2), nextPrice: nextPrice.toFormat(2) };
      }
    }
    this.log(priceObject);
    return priceObject;
  }
```

Here we are mapping over every vault and fetching their next price using `getOraclePrice` method.

```
// details of every vault
public async getVaultDetails(
    user: String,
    proxyAddress: String,
    manager: any,
    sdk: any,
    priceMapping: any,
    simulate,
  ) {
    try {
      this.logInfo(`[Oasis]- Checking for ${user}`);
      //fetch all vaults
      const data = await manager.getCdpIds(user);
      this.log(data);
      for (let i in data) {
        //fetch details of each vault

        const vault = await manager.getCdp(data[i].id);
        const ilk = vault.ilk;
        const nextPriceVault = parseFloat(priceMapping[ilk.slice(0, -2)].nextPrice.replace(/,/g, ''));

        const vaultid = vault.id;
        const collateralAmount = parseFloat(vault.collateralAmount); // amount of collateral tokens
        const debtValue = parseFloat(vault.debtValue); // amount of Dai debt
        const collateralizationRatio = parseFloat(vault.collateralizationRatio); // collateralValue / debt
        const liquidationPrice = parseFloat(vault.liquidationPrice); // vault becomes unsafe at this price
        const isSafe = vault.isSafe; //bool value if vault is safe or not
        const collateralizationNextPrice = (nextPriceVault * collateralAmount * 100) / debtValue;
        const liquidationRatio = (liquidationPrice * collateralAmount) / debtValue;

        if (debtValue !== 0) {
          this.logInfo(`liquidationRatio : ${liquidationRatio}`);
          this.logInfo(`collateralizationNextPrice : ${collateralizationNextPrice}`);
          this.logInfo(`isSafe : ${isSafe}`);
          this.logInfo(`nextPriceVault : ${isSafe}`);
          this.logInfo(`collateralAmount : ${vault.collateralAmount}`);
          this.logInfo(`Vault : ${vault.ilk}`);
          if (isSafe && collateralizationNextPrice <= 175) {
            this.logInfo(`Vault is safe but is at risk of liquidation`);

            await this.sendOasisNotification(
              user,
              vaultid,
              1,
              collateralizationNextPrice,
              liquidationRatio * 100,
              ilk,
              simulate,
            );
          } else if (!isSafe) {
            this.logInfo(`Vault is unsafe`);
            await this.sendOasisNotification(user, vaultid, 2, null, null, ilk, simulate);
          }
        } else {
          this.logInfo('Debt Value is 0 for this vault!');
        }
      }
    } catch (err) {
      this.logError(err);
    }
  }
```

As we are done with next price of every vault, it's time to look into the method for getting other details, so here we are using `manager` for getting `CdpIds` for a given user, for getting into more details, refer the docs [here](https://docs.makerdao.com/).

```
// util function for sending notification
public async sendOasisNotification(
    user,
    vaultid,
    type,
    collateralizationRatio = null,
    liquidationRatio = null,
    ilk,
    simulate,
  ) {
    let title, message, payloadTitle, payloadMsg, notifType, cta, storageType, trxConfirmWait, payload, ipfsHash, tx;
    const sdk = await this.getSdk();
    const epns = sdk.advanced.getInteractableContracts(
      config.web3RopstenNetwork,
      settings,
      this.walletKey,
      config.deployedContract,
      config.deployedContractABI,
    );
    cta = `https://oasis.app/${vaultid}`;

    switch (type) {
      case 1: //for funds about to get liquidated
        this.logger.info(`+ Sending notification for vault ${vaultid} which is at risk of liquidation`);
        title = `Vault ${vaultid} is at Risk`;
        // message = `Your Vault ${ilk} ${vaultid} is ${Math.floor(percent)}% away from liquidation `
        message = `Your ${ilk} Vault ${vaultid} has reached a collateralization ratio of ${collateralizationRatio.toFixed()}%.\nThe liquidation ratio for this vault is ${liquidationRatio.toFixed()}%.\nClick here to visit your vault!`;
        payloadTitle = `Vault ${vaultid} is at Risk`;
        // payloadMsg = `Your Vault [t:${ilk}] [d:${vaultid}] is [s:${percent}]% away from liquidation [timestamp: ${Math.floor(new Date() / 1000)}]`;
        payloadMsg = `Your [t:${ilk}] Vault [d:${vaultid}] has reached a collateralization ratio of [s:${collateralizationRatio.toFixed()}%].\nThe liquidation ratio for this vault is [b:${liquidationRatio.toFixed()}]%.\n\nClick here to visit your vault!`;

        notifType = 3;
        storageType = 1;
        trxConfirmWait = 0;
        await this.sendNotification({
          recipient: user,
          notificationType: notifType,
          title: title,
          message: message,
          payloadTitle: payloadTitle,
          payloadMsg: payloadMsg,
          image: null,
          simulate: simulate,
        });

      case 2: //for funds that are below LR
        this.logger.info(
          `[${new Date(Date.now())}]-[Oasis]- Sending notification for vault ${vaultid} which is undercollateralised`,
        );
        title = `Vault ${vaultid} is at Risk`;
        message = `Your Vault ${ilk} ${vaultid} is below liquidation ratio.`;
        payloadTitle = `Vault ${vaultid} is at Risk`;
        payloadMsg = `Your Vault [t:${ilk}] [d:${vaultid}] is below liquidation ratio. [timestamp: ${Math.floor(
          Date.now() / 1000,
        )}]`;
        notifType = 3;
        storageType = 1;
        trxConfirmWait = 0;

        await this.sendNotification({
          recipient: user,
          notificationType: notifType,
          title: title,
          message: message,
          payloadTitle: payloadTitle,
          payloadMsg: payloadMsg,
          image: null,
          simulate: simulate,
        });
    }
  }
```

As we have a complex use case for notifications, we are sending notifications over few condition with the help of `sendOasisNotification` util function.

```
// Final set of code to send notifications
public async sendMessageToContract(simulate) {
    this.logInfo(`Looking at vaults for liquidation alert`);
    this.logInfo(`Initialising maker and mcd manager`);
    try {
      const maker = await Maker.create('http', {
        plugins: [McdPlugin],
        url: `https://mainnet.infura.io/v3/${settings.infuraSettings.projectID}`,
      });
      const manager = maker.service('mcd:cdpManager');
      const sdk = await this.getSdk();
      const users = simulate?.logicOverride?.mode ? [simulate?.logicOverride?.address] : await sdk.getSubscribedUsers();
      const priceMapping = await this.getLatestPrices();
      for (let i in users) {
        const user = users[i];
        //fetch proxy address set by Oasis:
        const proxyAddress = await maker.service('proxy').getProxyAddress(user);
        if (!proxyAddress) {
          this.logInfo(`User has used Oasis`);

          await this.getVaultDetails(user, proxyAddress, manager, sdk, priceMapping, simulate);
        } else {
          this.logInfo(`User has not used Oasis`);
          continue;
        }
      }
      this.logInfo(`Finished Oasis logic`);
    } catch (error) {
      this.logInfo(`${settings.infuraSettings.projectID}`);
      this.logError(error);
    }
  }
```

Phewww!! That's a lot of code!

After setting up all the methods, this function will be sending the notifications with all the helpers including in it.

#### Adding [oasisJobs.ts](https://github.com/ethereum-push-notification-service/epns-showrunners-framework/blob/main/src/showrunners/oasis/oasisJobs.ts) file

```
// Do Scheduling
// https://github.com/node-schedule/node-schedule
// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
// Execute a cron job every 5 Minutes = */5 * * * *
// Starts from seconds = * * * * * *

import logger from '../../loaders/logger';

import { Container } from 'typedi';
import schedule from 'node-schedule';
import OasisChannel from './oasisChannel';
export default () => {
  const startTime = new Date(new Date().setHours(0, 0, 0, 0));

  const threeHourRule = new schedule.RecurrenceRule();
  threeHourRule.hour = new schedule.Range(0, 23, 3);
  threeHourRule.minute = 0;

  // OASIS CHANNEL
  logger.info(`     🛵 Scheduling Showrunner - Oasis Channel[3 Hours] [${new Date(Date.now())}]`);
  schedule.scheduleJob({ start: startTime, rule: threeHourRule }, async function() {
    const oasis = Container.get(OasisChannel);
    const taskName = 'Oasis check vault situation and sendMessageToContract()';

    try {
      await oasis.sendMessageToContract(false);
      logger.info(`🐣 Cron Task Completed -- ${taskName}`);
    } catch (err) {
      logger.error(`❌ Cron Task Failed -- ${taskName}`);
      logger.error(`Error Object: %o`, err);
    }
  });
};

```

After setting up the channel file, we are setting up a three hour rule for hitting the notification triggering method every 3 hours.

#### Adding [oasisRoutes.ts](https://github.com/ethereum-push-notification-service/epns-showrunners-framework/blob/main/src/showrunners/oasis/oasisRoutes.ts) file

```
import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { celebrate, Joi } from 'celebrate';
import OasisChannel from './oasisChannel';
import middlewares from '../../api/middlewares';
import { Logger } from 'winston';

const route = Router();

export default (app: Router) => {
  app.use('/showrunners/oasis', route);

  // to add an incoming feed
  route.post(
    '/send_message',
    celebrate({
      body: Joi.object({
        simulate: [Joi.bool(), Joi.object()],
      }),
    }),
    middlewares.onlyLocalhost,
    async (req: Request, res: Response, next: NextFunction) => {
      const logger: Logger = Container.get('logger');
      logger.debug('Calling /showrunners/oasis/send_message ticker endpoint with body: %o', req.body);
      try {
        const channel = Container.get(OasisChannel);
        const response = await channel.sendMessageToContract(req?.body.simulate);
        return res.status(201).json(response);
      } catch (e) {
        logger.error('🔥 error: %o', e);
        return next(e);
      }
    },
  );
};

```

Now the last part of setting up the routes for manually triggering the notification with the above set of code.

#### Setting up keys file for channel

This file would be named oasisKeys.json, and it would contain the private keys of the channel

```
{
    "PRIVATE_KEY": "0x_PRIVATE_KEY"
}
```

You can now heat up the server by running `docker-compose up` and `npm run dev` and start sending notification.

That's all for now :)

If you enjoyed this tutorial, Do join our [Discord server](https://discord.gg/YVPB99F9W5) to meet other devs and builders.