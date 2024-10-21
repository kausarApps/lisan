'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b052bbc7ef432715d0d4acc3b9e1d52f",
"version.json": "fb8890d5e0f18f807233406d3ba88dc6",
"index.html": "e487f9648e72b48e444e1b976b994a8d",
"/": "e487f9648e72b48e444e1b976b994a8d",
"main.dart.js": "42698c5aee47ff05f1227379f08cfcf4",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ce84d0d6bca0fc75523f28a111470207",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/objects/95/535e649ae991be31be3f4e8c7b4bead90016d9": "8eaa582b01da41af273afb93f2d29599",
".git/objects/92/7e299ce344ef166787672c9c52700f9abcb870": "1988786af9bd65b9b6b58f16bc18ccb5",
".git/objects/50/df98dded226003688bc665b396157f0abdad79": "b2ede395604a0d101d343b7b5b18bab5",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/6f/824cafeb21e7219c9f85afbf46efd87c0c513e": "7de21820351b1a8d55409a9134629dc8",
".git/objects/6f/cb17a8c8223f96c3d122e9704e596341fbed92": "5758fa8544d08f9288f2a06aea3e6608",
".git/objects/9b/252b57baa4615a3ae708c7e8079eab13ddf22c": "0f85fdb58e86b52adc55f0b68f34204d",
".git/objects/9e/c33d9c4b9f97f5efa6ece1a8a87bdabf166953": "4fc53b497126fcbb0e9dd71cf4d4dda7",
".git/objects/9e/a3d364918f59231816f730e64958df4b22b615": "e2978054fd8130b101b33df2c53984f0",
".git/objects/04/a033aff24f3a02192ef2c25198f0e0e903f0cc": "1e90cf9494900f0eb9d89abd4661f5a0",
".git/objects/04/bb81bd657f5630a1889e4c74a3f553102d7e30": "58115f8db4b4633a637ddef9825d7086",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/0700b42b5e2536c9ce25d79395fa74b6015d54": "b7250e7f97a6d7ce7c3cbbcffe6c54a9",
".git/objects/69/560368f4f6c38ef9d7441a7d858257b6af41bd": "11de0583d4d84d13bbb8e24b8a33b9ca",
".git/objects/58/3898feaaabaaafac742ef0fabd8fe54a1cf841": "fc08f3235ad05ac06dc682a6d8f9fc5c",
".git/objects/0e/9e05f7426be6f74325ec494f3a1eebc901e9d1": "394a836513d84965bc1e58af183c5f2c",
".git/objects/34/9f12c03d7b62bdba93e7705071cf23bc7364b4": "129eecc4617164a8394860016be8e7cc",
".git/objects/5a/fce93f279a4bbd78006896182207b9b14cdecb": "0edade263ebf8ee59bf0c504155fe365",
".git/objects/33/727f9840312457e5c9673adfb4693c17881035": "e689b34d840b6f7ded71a41592a98061",
".git/objects/05/afe6da7b02e9d9e555b37c28eb96c55c7ed5da": "6993296a50f2afcb3b83bd10e42e13b7",
".git/objects/02/e50130e10fabe8372c08a2284284e7f92f3e84": "d1b7f757bf6c8ed801a9174f0b05a346",
".git/objects/b5/94dae97882d78d4882da7c9dcd5486cb4f9bfd": "a083be69a695ccee8ae3142116b40022",
".git/objects/b2/7195bc1768097ef3fee9ec0856815beea585f3": "a50bebe30a7e95c4096561dab1b81202",
".git/objects/d9/06338740cfbce0ea418a429e7b85d9ef92741d": "9d64977339c2dea5692de001fde8eae7",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/88d9b9848368f52fb0421cffb8536705758e86": "197eddd2e52c870f0754d3b597c3abc5",
".git/objects/a2/38e717b385c5bb9929fad5733542b50aa1933f": "4acd4a515eb14256e294c393cc2a6e54",
".git/objects/a2/22898798481a62b8563f220d964d10cee9a0a0": "4bff1daea40868c2144082192b647829",
".git/objects/a5/b9074ca9195b0e98ca1f8cfec95a1e56d125e2": "b537e41a8062ee848d91596f63634a0a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/173900953242619e9659d1ce2b4d54b19e6580": "f7b3a37169f86a6efee6d11eec99efbf",
".git/objects/ae/67cd2a87fe5346502bc9d1edf683f924a84119": "b3dc1db977e091bda2ad6843439c65ea",
".git/objects/d8/e9b51bcbdf1633d94b9b0a3b3ec400ed944037": "bd1288a13edc5670094a09bd574d0ddd",
".git/objects/e5/e703f74d42bd4cf9ee28b6223e96b8c5f8a08c": "d1f2d58dc7d385fc63c54a6c4b131a36",
".git/objects/e2/3e0cc56931f2b9a37e33daebeb03a98af00aaa": "190bb702ef3e1b44d9145ab7de3ccce1",
".git/objects/f3/3cee932f4dadb66d993499333c6bd375a278d7": "89e3d9934933f81e5084bdc1bd3631e3",
".git/objects/f3/bbce34ee47f467992d802cac4b15b435557563": "b6833b0818277d23295a510043368464",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/1adf3cee8e3dd2ce91875a51b3ec71ead2097a": "da345b935aadffea34dbdc3f02e8aa81",
".git/objects/ec/f9ed338d2b959d9cdd8ccf7521123e05472f56": "350bb05ced51210e8b2317a44ce0be70",
".git/objects/4e/030e05f5bfafdb5c846d06ef488a11cac1e525": "c0af257340f8e4affce8e2100df0f7be",
".git/objects/18/3931de61bf3e6ba8d993afa7654a883296b6ef": "fa9b27ef2d14a08e55b3e13562acc3d4",
".git/objects/18/95f04b794fa7b5ec0ff00f7c471e3ad1649f78": "e6871c14765eede2ecb4708951c88025",
".git/objects/27/701d93ed11a82ae1544725a2b1fba6f4cfb451": "768bdd0e47bd60f04d453c5b0044aa99",
".git/objects/7d/1939471c3a238b413f1ac40880b3102c5360e6": "52291202ff0d1bd49a669382201ac8c3",
".git/objects/29/ca2b58dcfebc74a85613c0083f631e53ac706e": "6b6e9f4a1c8a20430b0b7dac811a2247",
".git/objects/29/9451e09fdfc0af468c933f5eda9ae0639872ad": "043c102791a0d625d516bc4d1404a355",
".git/objects/89/5d6d0db3aaff0400e5d60e2bf25257db3ad0dd": "fc1d08095cba1c1b480e58430a1859d8",
".git/objects/73/3ea8a6187db9ed71622b306c207fa070538b4b": "fd4bd7ccdfb2e615be5c4e5e532ea58c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/3e9456b1d5e609aadce6db22b1be36e3e90d37": "4f9739ddee61dbf1085a45afba3f00d1",
".git/objects/19/4658fb4b6ab1370b0213076313fc84e29ac551": "23ca5f9f3df270d5d2a849b8883c6931",
".git/objects/4d/e3305e04e4ca5c8511995d4d3addf31a938afb": "5abc2820d141dabb3e88063ac22d58e6",
".git/objects/81/ee5b9306b8d0cec0b9fd4dbc223685401a4f46": "9c2b830ace42f2e5257c8e13bacb1025",
".git/objects/44/b0625fa5801e43c81998854223d1f23711e7dd": "7cea499e582e751687a898a6685eb2cb",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2f/5081a9852f6cd8acf6b7db6fd2fc812cf8993e": "42ad738830944d52be829e00c8b0d3da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/31/6433b252cb2039c19c83be21a7cd3cf1080a94": "ce3f6f425dfa25df19baade9a9e830cb",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/606889287bd3891518fc27681a43d422fe7d2f": "7205ec18132b7e0e928c600df665917d",
".git/objects/54/55ad40d6b748b43e55c0bbac3c80d4d890dce4": "73bf17ef135d4f32c9a388402fed2423",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/5e/46d318cd7d2a62e13d3a97ee5129a59917833d": "9ba24d3a0bf6ebdfbb4715b35cd9bd02",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/acaaece59cb4acb1cfbd98730c405a38b0ffe6": "d9cfda487ef15b534cc064d92925d59b",
".git/objects/06/e64f4dce6faaa73d4e3062765ae4e1edb80c9d": "9965b598e74ffe707efd6a59fc825166",
".git/objects/39/6fd5438092c4d89c4f8c6ab08542bf4c1447b9": "e1cb7ac832f79d3ddb9041ae33616f48",
".git/objects/39/0877512f6af3cf5bea6759dd477c3883018d90": "8f9df9ed94446fd32b9d25bc97e81e67",
".git/objects/0f/e338bdba7deb34f986cc088ec07ff64ac766ec": "7538369472f4f1f688dd084bc0984490",
".git/objects/90/05d18301326dd61a630f21cf9ebac611ba44bb": "32c457a40deaafe8172821d7097a48b7",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/4c55ca795041ced27961d7c92dda3f2ee223c3": "07629ab852486c05c9ef37d8180e100d",
".git/objects/d3/cc17401e0934e870497696c1de7c549c21b0cf": "a32a8f1ebb2f74d4be6f1e36a7f87395",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/11599477e339d4525cbbb838db05f9f7d81b68": "2608b79d3ddcf5067afec2e8f7ff237e",
".git/objects/a0/660410bdc280db0ec45ef78aa1ebdf1c325c5c": "a9dfd935e31b7cc914a295bef11b2ddb",
".git/objects/a0/95e385c1e91bdbadeb54692dca15d2af6918c3": "02552557462fa8ede9b5a1b1e94d5b00",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/33fe519ba601bf59a13c7b52b7ae524e1e98e1": "b7c04b152cbc9dc5f8c2f2eba3f269a3",
".git/objects/d2/f8f495356fadacb71421c163027fa3a5ba5a78": "cdfc1c229a65ceec7ed7eab21e2bd2b3",
".git/objects/af/24fc0bd8386c88bdb7e3310fd3bc8d4661b3c1": "8764b76ebe60d3bb9b8824496aed426e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/37796189477896596a5e35357c799639108dd8": "18c8700c9ad48162609c7fb05fce579b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/3a22c3b237db6d9ec9a15d9470a2c06e95564b": "140f2a18e04b4065d4470bd70fc35bfd",
".git/objects/ea/53780644dc6626300a10ebbad03640afecb3d8": "0dffb8d878c7abea712735fa6fc97d80",
".git/objects/e1/b008c50de805a30162ea72d2140d58ecf0a518": "6c0b0ae753a85943237ffb9d91900877",
".git/objects/f7/2a7c41dfafe57b69185d5a854dd800e486498e": "934bc21986d2f9dba82c845a6623e4f6",
".git/objects/f7/716c6b1259ea40642864564954d4adf2a11a4b": "ec68a6c3f88f3c088c3429777833ea75",
".git/objects/e9/c0c5996bb441d21c6d9a2117110b44c22eeb5b": "1203aec68cedfb793c9c7360692d6d6d",
".git/objects/e7/cea152bc6b0e774c42b181158516f6d33c6143": "e6ceaf391e555c5d4abf90bbfd489e44",
".git/objects/f8/2de54a7794391ae6d113cc062fb954f47b87bf": "103dd16478388290a87eec3479e6ceca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/d0e3556362f52f735c674d1a8dcf249a9f538d": "ce0fe95191ea62e4b80dd6d470976d4d",
".git/objects/79/4b8d25497ae1f46b9fc70502333fd6f2e6a23c": "0dd585ef634aa5374ccadc08c8f3a156",
".git/objects/2d/cf99e3aa976e0aebdb5bc1cf601624f9441f4e": "60f4853a3f8ba6c66bd705b488499e61",
".git/objects/77/73fe949136398fe8ceed98cea5d4bbe0e82e0d": "3882361e2abc54b2fd8f0d89b6f0d8d1",
".git/objects/70/58fad0ac0fde161e4357aa08d99e2ec03db294": "ee4b0648ac45e67379578bceef1aa2e5",
".git/objects/1e/5c8b4e97ce34b70cb0c25b9ad82d3588685810": "9152f6c630800ab5fb2958dddacbcef0",
".git/objects/1e/8d81e8896db5eb48f4164e503be553d43d076a": "bca39617e8cb792a118e3708f3dfc776",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/414d77e3a67ed1fd2d3bb65fc51b78a7e09faf": "2e329329f3b8b4130df83b8d512a97a6",
".git/objects/85/cd768f1a5a76607b190047e7b52534ca1b832e": "01c107f69faddd631cf8f690bf8fb5ec",
".git/objects/1d/9bc91c2e6d2dd5dd31ada4445c4e471db9a817": "7e01e3d96dac1a6edc88bd7b04d3f6ea",
".git/objects/1d/39521d75045cbdc7a983f86a3c0e009b2a808b": "910951ce02faa05fafb7df104d74b896",
".git/objects/2e/95213bc5b4ca438149d0d3d7c0b69193e9a27c": "f5528b960da485e92500e149941a37a3",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/8b/b720b8568810012474702261c97fc9a54d9d53": "92fa703e7bc67d305ffd39bad0187266",
".git/objects/22/76f91cbd03e136f61499f3f78969768217cc12": "bfa2b44f0584fd015d23fbe18010c867",
".git/objects/25/3985f83f4fb6df9dd482c7388f2ee8271fa367": "de284910e5b269a66f6d514a045b4e6d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63269b8565d690c7b7caff9d20d0b4ab",
".git/logs/refs/heads/main": "66146c8ffe7f727371ca13fddda56040",
".git/logs/refs/remotes/origin/main": "1e4df121102c9dea72fb9339319d6545",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4d4c33ac18861ec2dd764dd80103e454",
".git/refs/remotes/origin/main": "20d736f21d84bf626b82ac5b465323f6",
".git/index": "35222445887bbf72fecd2a12ff0eaec3",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "efdbc92c3cf25eb2ba716fe83b7047aa",
"assets/NOTICES": "a1f666d04bd43dd395bca592fc8dc0d6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fe667774d179d1511c3d06d4bb43e1eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c3de2c7636ea35498a2681ae658f249f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b88169d3c0d00a72309a4af404c8e0d4",
"assets/fonts/MaterialIcons-Regular.otf": "b3eff91b24327d1fa971963075695816",
"assets/assets/ascent-braam-magma-brass-d-cinematic-trailer-sound-effect-222269.mp3": "3946e2bfc79e83f331c8d903a47fcc24",
"assets/assets/Voicy_ure%2520trash%2520kid%2520sound%2520effect.mp3": "c0367ad63f23007d75f220f7064cd813",
"assets/assets/image_app/speaking.png": "ed87482c6f4a396572f186b26cdab659",
"assets/assets/image_app/bookche.png": "cc0853eb6f8fc959491fa4a976a0b85d",
"assets/assets/image_app/lis.png": "df4019edec444d96b8c9a1dd601e464a",
"assets/assets/image_app/reading.png": "79d466567f26479061129f0baf2e578f",
"assets/assets/image_app/writing.png": "ef43b9f1b7e666364044d697fa086364",
"assets/assets/alphabet/%25D0%25AE%25D1%258C.mp3": "42b03e5243a8474faeab0341f2b8de07",
"assets/assets/alphabet/%25D0%259FI.mp3": "cb9dd06f462a6a9381480c612da4f1fe",
"assets/assets/alphabet/%25D0%25A6I.mp3": "de84dc5e74c6facc5b5f93f58fc60b55",
"assets/assets/alphabet/%25D0%25A7I.mp3": "b19bc6fddc9cf47f93358b75f78610fd",
"assets/assets/alphabet/%25D0%2599.mp3": "3a56b1206ba77c905de4b85334dbe6bd",
"assets/assets/alphabet/%25D0%25AC.mp3": "c40ed40dc50afcf0fce31ec5acf8479d",
"assets/assets/alphabet/%25D0%25A5.mp3": "08a2a3e49c94a126cc4491a2f80cc781",
"assets/assets/alphabet/%25D0%25A4.mp3": "88efa3ed1aa9ec65bd2d9f3203796ff2",
"assets/assets/alphabet/%25D0%25AB.mp3": "852cacaa06b1c302710deae4f1bf559d",
"assets/assets/alphabet/%25D0%2598.mp3": "825d7dbf82a32fb9135d4fa001117966",
"assets/assets/alphabet/%25D0%25A6.mp3": "80929aa8bcc761a941e8413ea3fff119",
"assets/assets/alphabet/%25D0%25A7.mp3": "bb9672c57398f915865bb20f4454488d",
"assets/assets/alphabet/%25D0%25AA.mp3": "edbb6fc3484dfee4cc5d79c9d17702c8",
"assets/assets/alphabet/%25D0%25A5%25D1%258C.mp3": "d179891752e113498a941be1984569f0",
"assets/assets/alphabet/%25D0%259A%25D1%258A.mp3": "1021a5e3fa1778b25823a288fc8b96fe",
"assets/assets/alphabet/%25D0%2590%25D1%258C.mp3": "cdd0067693a517b4cacf7597d34f9889",
"assets/assets/alphabet/%25D0%25A3.mp3": "5f4d1aa054a7d19e34c189720832f4c7",
"assets/assets/alphabet/%25D0%25AE.mp3": "2552e9b6e21271bb6a40b42891f3b435",
"assets/assets/alphabet/%25D0%25AD.mp3": "9814312931b35fbcd57732a832fec394",
"assets/assets/alphabet/%25D0%25A2.mp3": "470fad9959030f73ef3e34370e8d8733",
"assets/assets/alphabet/%25D0%25A3%25D1%258C.mp3": "b0faf41d11494f09c935056546182277",
"assets/assets/alphabet/%25D0%25A0.mp3": "64b3449fe38d45f8234b76ff2c611553",
"assets/assets/alphabet/%25D0%25AF.mp3": "fa533942bafb9aae34054037f0a54b31",
"assets/assets/alphabet/%25D0%25A1.mp3": "6f101a52189c4a7ffc1ec3f8d1897689",
"assets/assets/alphabet/%25D0%259AI.mp3": "6ff69957672e4167b3c1b960176ae48d",
"assets/assets/alphabet/%25D0%259A%25D1%2585.mp3": "0b45846fb370c89919b6c96c1231ff4a",
"assets/assets/alphabet/%25D0%25A2I.mp3": "35e9ca4bcc22aff4903ef1fe94a9e641",
"assets/assets/alphabet/%25D0%2590.mp3": "f2b95e180712a2121a708fe909c0485b",
"assets/assets/alphabet/%25D0%259F.mp3": "70b6b85451db4e94cb218d41eb1177fd",
"assets/assets/alphabet/%25D0%2591.mp3": "75d4d8d3fb596026a25f3b11342c6fd5",
"assets/assets/alphabet/%25D0%2593.mp3": "22d90002d2507f248b92c7c7dfdc53ea",
"assets/assets/alphabet/%25D0%259E.mp3": "1b886500307bb3680c565f413096aa7b",
"assets/assets/alphabet/%25D0%259D.mp3": "30c06a299b3922f33b09d2c98ff4bcd4",
"assets/assets/alphabet/%25D0%2592.mp3": "fc3a947ca0bbbb085f9d2f163e666898",
"assets/assets/alphabet/%25D0%2596.mp3": "b2556ee7b3656e7ae786829cee893d7b",
"assets/assets/alphabet/%25D0%2597.mp3": "d123aed6fff844029058aa4d9ea6b0f4",
"assets/assets/alphabet/%25D0%259A.mp3": "1b3e5a552d70c457388bfe0ae7ea1acb",
"assets/assets/alphabet/%25D0%259C.mp3": "53d240df01bf8eaffe9692d667615aef",
"assets/assets/alphabet/%25D0%2581.mp3": "5d677594d389f2a0e6164f0903ec7b80",
"assets/assets/alphabet/%25D0%2595.mp3": "827eef1db031d42b9bff5e6b37a36796",
"assets/assets/alphabet/%25D0%25A9.mp3": "6e3dc3605b10ebd6c5a4211396240142",
"assets/assets/alphabet/%25D0%25A8.mp3": "edcf4482bc5daabc16d272d0193f9ce4",
"assets/assets/alphabet/%25D0%2594.mp3": "15d57cf99777766b5058d24e5af8f45c",
"assets/assets/alphabet/%25D0%259B.mp3": "2440fa7b854879f18664e07eb04eea63",
"assets/assets/alphabet/I.mp3": "32cdba889b174c46b9d48d2f18abcc10",
"assets/assets/alphabet/%25D0%2593I.mp3": "2935d87ac8b66eb75bf94ae132d7e5be",
"assets/assets/alphabet/%25D0%25AF%25D1%258C.mp3": "2d911516d8cc85e605fabcd4e8cba6dd",
"assets/assets/alphabet/%25D0%259E%25D1%258C.mp3": "26e429a60bcc8660ef375ef9fc988507",
"assets/assets/alphabet/%25D0%25A5I.mp3": "18cb7348c904e7d272a6a88b40b0958c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
