'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "962da3ce51c010483cec806c5dbbf95d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1703c4bac89b91dd9fd63f794f437f37",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0aaec20c694459a4d3bc6e5a9ae0f9ee",
".git/logs/refs/heads/main": "231887000dedd879d3150c01ea184ddc",
".git/objects/00/5585d79e8185eeeda9e2824d0bcd12fee259ce": "a66cff46b24077a42aaf4495f42a0fe5",
".git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/02/b3ffa97e57b2b9c637d145675192c135e7e2e6": "29de5e077815f46dc8a4b42714c08739",
".git/objects/03/ba4ee4cbb7b1458c1317497371ca835b405bf3": "a9928afa2f6e2ae2ceb7b221764bb939",
".git/objects/0a/71b1707e5fa5fe7d72deae3d7de9cda89136ec": "78f12c42f2c7b87141a9fe813c2d347c",
".git/objects/0b/86a484c685aa98e6f4479e544ca93f57518967": "3aa82d7a2b760b48113ae7ffec266db1",
".git/objects/0c/cc679c46d0da107f1e8c9019d94f5ff491ebee": "b803b429efd39bf0aa00cb1dae2acfea",
".git/objects/0d/0f69ea0399fa45ad6e5791dc402fedf3a1a151": "4fa484b228fdcd91a44c00a131376556",
".git/objects/0e/b54be29f04790648b9036b8453c51c3db35b31": "a42f2236e4f70eb06825f446cdfc793c",
".git/objects/12/f2b6c7d1475fe5a3506b8517f0cba76814f82c": "b22f94711bba114fca2ed6792382e6d0",
".git/objects/13/4bb41f26adfad8f6c85c67dd6112d90ff9d1d5": "7cff6f534a4bf2f0781720a806c2792a",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/17/edfb601bfa6b3491d2d1f83484532a2b18418b": "fe547b7796d43f44a2106de82d7976f2",
".git/objects/20/132db515ba567f7b9c600e1abc80cb2fe50eae": "e94cb8ebed7070ebedcb7f91da386ac8",
".git/objects/23/20e682b622943701b1cdb4c1ac3c3e8ab8bf3e": "46773b0e95eea422f6b21b470f472593",
".git/objects/26/81e9a0afbf7e2cec70869caae8140adc602b42": "868f12f1737c769945f6c34e7fb1a251",
".git/objects/29/4ae6f7beb17f65d72d30b8f05bdd5813aa1ae8": "f0fe056688374cf6ad50b78994c3e3f2",
".git/objects/29/970a856a0c2375f5ac7b9da49d11f38540e578": "a0f4d7f4ed9fca3d76ff29402efd9851",
".git/objects/2c/46918e0953cfef8ec7b0248922ce8cc69ff13a": "7d8d96bfd194cb4d00aa6572a2474ba2",
".git/objects/2d/15cdbfe739b06702eb9c605283f21c5b3f01b4": "671aaa09c50439bec3d8291eeaf1f39a",
".git/objects/2d/274651d382c4710dc5da1affc06122dd038e10": "b8a6e587a50b303765b6beecae74b3cb",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/31/917637f813c078b977f069bc95cc3b21d21680": "c803b199ce2853aaeeba754e1e91da15",
".git/objects/35/2762840820ed9d54e6cc876f9224d4caddae2e": "af704400c9c97ad87d32c86d1e0dc939",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/46/6bfce2f9408674127fba3a3b1b3890960f7514": "3cf5a9c1e92cfe226604b698f984639e",
".git/objects/46/7cff185b4ea7fbe905a5ef5659054c6a279934": "b22719d7f6f1d5167d1d601ff48a652b",
".git/objects/48/748cc9ecfe055d900c70fdcb5292a9d09f95a3": "2c57fa9ba2bdcad955a6b28018fac174",
".git/objects/4a/d6dee2d66d72afa2588504fa064a8c717801ae": "2d7b7ba51a335d2c37a263cb19bca73d",
".git/objects/4b/13b948dc9e8f28ed31ff9d88c334ae18ee123b": "c8ec08a6dffafff1dd39cfcebdf192ad",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/5faacc3ecbdae219b876b2c816e1ce9008b7db": "984a5eda4d562656c86a829ca804b7be",
".git/objects/4d/b1df2891f772282ae25c0a953c877060d625bf": "a77a455897e816b9bcc7cd809c70697f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/2e5c67d1300b45aa350c696f342dc2119f48e5": "1eca251e4a0784e5cdf578021b10ea42",
".git/objects/57/1947f0a32f4aa0355bbd8a5a5e40aafaaa7af1": "0889ccd63d96bebf836f1a98a5018a42",
".git/objects/58/ec1ac6e3338e05fbc843e29bc0c44da8c0fcea": "4ff23ae9c19c7a97b85758512924d354",
".git/objects/5a/008eb9bab0d088da334a9a93ab9189f9b05b35": "97426808acd07870c51e838748d0e97d",
".git/objects/5a/1eabf6dffa4298fb2cbf0ebc5f2aac94a13ab6": "5cfb91aa7d3a96ae0d051fd2c9dd2519",
".git/objects/5d/b408020f0a2d12c1db8f69b89d4ec51ab74ad2": "1b53ba3b7ca14d4c93d97958b7ec2a6e",
".git/objects/5e/0cab4af93b2e32b23529a3efdcd6e5ae8e6455": "941ed448c432bb8403dda2e6d691a077",
".git/objects/62/6922d384040f4e31c177b8f4b9deeb23e9b0bc": "f988e017d71e0b8fedce900df8cbca8f",
".git/objects/64/5ccfa8d943c861018c1f3e92e3f5abfb622f44": "982874128419fb760d3344d5ee9a4fcf",
".git/objects/68/1ac497a57d4c432509a13d2862328f93c5a8e2": "75e2d9e9d7f37336c5c6d5a939c6d2bd",
".git/objects/68/f0fae1fb5ff56885964ae5f528f629a0399092": "6d84d8f1ebf49fc59d7a725d424d2e6e",
".git/objects/69/f5f2237c060b8bc124e533b20f40e21d3ba1b8": "768277442d56221916f121d7e47f8864",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6e/a2a5cbbff9452fbe1e7e7e619c77377f3ddc6c": "94b6e160e0e705b7079b96df6002b8ba",
".git/objects/71/326cd2690a1569a2ba07acadf6139f1e61243e": "727eeadb72289f1bb0d8ef4997ab713a",
".git/objects/74/eace80e87c565a215efd40deb419f3b0521c1c": "9950d996ba59307311980eaca9b6f91d",
".git/objects/75/ab36c94b6a235be8f7afc835d7065ba1992fd6": "ab50acaae032f4d1fd6b13e6dfd78d22",
".git/objects/78/02adf3b624c400fe92d8738a3ea718bf16c36b": "ba8a5923d53ee12fb7d48b53eb721f28",
".git/objects/79/b53e4a5acbd9cdf2b331d280a1151f02262dd3": "940e052ba33bb8ec8d2420401ab5aa63",
".git/objects/79/d21d278fd8fbcd898e50bd7ca188f29bd618f8": "4a63c3d53eb319293b5bc99f26c7316a",
".git/objects/7a/5867101823e0f2c2f4e553a5170bdeadc6a5f7": "8d50ee7379d23b0fa22f47b7c06ecac1",
".git/objects/82/2bbaf6ffd824d96085fbe88458bf49cef568b9": "6b18ba6c4183bd541229a774fa72bb44",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/87/543d5d2b47ebb1a6d9ab34c0937df2c91a6059": "5f8168238bf7e1e3f0c435474323fe00",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/f6ea0df5900cc0f65bdf59ed74b37d027575ae": "479ec38af6fc11738bd223413358f7b2",
".git/objects/92/e2b6fef3e44b82aa0392bac421c0692e3ae429": "a9a397f60af76ac44023d8be3dcd0ba5",
".git/objects/93/374d7d774abae0818225b9b6f5e58810cf8a14": "f2c04f3734d161b66d21a7191678b272",
".git/objects/96/45250844fd675d37aa900714cee1776da5ee7e": "c33ec09e18aa08640cd1a911604a5902",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9a/67debc64604f36a7bf5b546117b0bc0dae726b": "53f258d01f12e01fadb1856b08d77e96",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/ae68f8b533d74c8b1d2ce4b3e963f45891461e": "a853223801c47e9073257085636dd97e",
".git/objects/a2/64ebad557549a07d85d29fcf7340bc6ad161e3": "fa1629bc270889e9ccf672378e6dad37",
".git/objects/a3/817583be7d694256f97bf49afc5ab0797467da": "1a0a33942303a4dfcfe3cda41c55fd6a",
".git/objects/a5/4d33f85336a1c9e182a70a3dbd50431bf0fcf3": "59c42b26e483bfd37b6c1474ed6c2a80",
".git/objects/a5/4ff9f0f184450ee1baf9ff4f567758790b47a8": "e14a431d0fcc6054d01eff43b910be18",
".git/objects/a7/7441f14bdd56c27122a44cc2342d13afe3a4bc": "6999e8098fc2753a4c8c5ec3a9a74fd4",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/aa/67ff236a0870edc62f53645b7b42c5d91dd1b1": "82e8c972741d361bb68fce05a358894e",
".git/objects/ad/b032484668d024198f9743d5516130f77516db": "1167b2ace9c4d633e2755e6308d8a85e",
".git/objects/ae/c056babd7a54099628dde55dd73b32ae81f3e0": "7317bdd3f887f09989e976c84b5cd7f6",
".git/objects/b0/57d844372d14e43f791c7f871070a968e6324f": "64376d3f55cf03d2e9143fc1638a1aa3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9354da154d970b43c7496f0f1fe5c823a50f48": "af18c88441d62da55233c326844d5671",
".git/objects/b7/e308e480fd2bd44eadd525ce5b053452db34e1": "9c4497abff9718583933f3279198899b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/58da1a13d2259ee2d585d4d3cbd7657c03dabd": "a970b3f55e31256cf06ad4ab9209a12e",
".git/objects/ba/aa341e6e578c6e9b7f9e9ffeb7646f9256dcc6": "0c1488fbb9ef4c994c44b0676d05cfd9",
".git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/be/6aad213d83288034b70a8355841b863ab31f0d": "888b3565c935756aacfe767145d76794",
".git/objects/be/eca13fd9fd0dfa2eb07fb0a4f7a5bfa14faa8c": "683cd7bf2704a58afb02706c61eb89cf",
".git/objects/bf/4f4cc5bdb1dcfe38669f0dbc89892c202bd4cd": "934188278bd035d481e48f5d9f462655",
".git/objects/bf/700ca9b65c85f9542971e97a4866cc7b995998": "4a1f8041b1d91aed0d99bafa532f8a23",
".git/objects/cc/aa10abb5b06220687e5e8b9935891e50b952e2": "1f7e212b820ef76bdee3ad200421f4c4",
".git/objects/cd/05738f32e43ace9babc8a55202981001aab5cb": "006cb5b006904819cbc374fa4827ba06",
".git/objects/cd/a249a0e478108df4081a298d865b6b7f6b899b": "47bbd3df69b96a4076b45a232ebfe457",
".git/objects/cf/0d1580447e991441a72edd2c807d5eb6294bb7": "6f1b7f7755d7130a821318752db457fd",
".git/objects/d1/ce61e79952f1221d3e83078f62bfeee08cb80b": "683d8a69822d8064985a04add8d1a517",
".git/objects/d2/f590bd5c225c25bc8cf67fbb5f932a51083b3d": "5ec6e2a2b86a10848d075595b38ec50e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/086150dec129adb723d946b0c5d07647b3268a": "e787374096908fe9a8cd063c8692acc9",
".git/objects/d4/3d55486225d408050816e6f62f2c527934f965": "e0bae9095b3e5c61e7a44f419a42252d",
".git/objects/d5/06a58cd032339e125be4a10e0a862d45d32f3a": "59a1d69c0046d03d8f2a542a5c40e82e",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/66c6033e1abc14e426e514efc60745395cdeff": "d719d3e7b602ff4bef25a46cf51592d5",
".git/objects/d7/aeac99a10cef8b9f7f1251bc072c3f03a43db8": "843d6fd50f8d448f52d4e0a017614cc0",
".git/objects/de/c67379e25c21659035281e49d64bb2ddec52cf": "fc5817e5e955f59b7f84e0fa5b296f2f",
".git/objects/df/a72ce808fbb783042da88ce1bae5d9adb54fb6": "a8b2273e3e67083e15260d16437b2050",
".git/objects/e1/e80df5ca2c5a865d0ef2f737950502cdf3f981": "3edd25e22bc5d1144ca38c41a965a8d3",
".git/objects/e2/7a796d142ba31cb3b8e95f955a40713df82472": "9f45437904e50907684c9e9b88885948",
".git/objects/e5/0b73287d44c51b77ef5b9956410c375012d24f": "f2211a335b81a75720e4ada376e1a424",
".git/objects/e5/f6e9b16936d722af7dd6587763f6b183ff0000": "25a4dc490a088450c810628511159741",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/dd148b784666a2fe2c3e758813890c62664592": "d72f74775973264fb2cedd0b166377ee",
".git/objects/ea/6f17525fd9c3435be1cdb31ba185b7cfcf3d0e": "fbf5313401f751768e248b7ee53af6ad",
".git/objects/ea/bfc4ff2bcf98f71cab30b7bafe9dc2f513147b": "dec7fd183b08b80b7456cf46204f646d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4b8d16987ba9cd1f941f7657070a8551903697": "5d0c9c72fa2718b2b3a6f8deb3407e71",
".git/objects/ed/60bf3605b7ee3a4eae148f6c022f3c59a25731": "237d21f6b9912703ededca3b4ac75851",
".git/objects/ee/4dd69b4861bf4ddec10ab924072dd36c8c9262": "fd324afc4a9f9916ba30032e5854fd6d",
".git/objects/ee/f504fce0fec5a3b8feb511365fcc2a893a9b8e": "236a647ec9ca33ea0cec5d23625f373c",
".git/objects/f2/3073ccd0f0c91c9c6357383a92f81308c09ced": "45d087f71b980723d872cb158e127c84",
".git/objects/f3/09c95f5c05afe8cbbf85d3d7f36f6b2df21111": "7f127a97cd606fd73edf231d65d00514",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/f5/d4f1163248717e5c62f401b78988b05fc8b732": "61ef88918f2fadab17ecf8f9c14db397",
".git/objects/f8/6a7332735a9642bb5eceb3e8351fc5e394720f": "c123135d0e9737ac8ec38fcd969df289",
".git/objects/f9/2f3280301083feac69338640d31e48f42269cb": "d52664d4ae654edd362db8fb37ed99b0",
".git/objects/f9/78d74d4487958be64480fa2449090f57c0677f": "048c37b3d6438b927bccfaf8615ba10c",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "5939bfddf745ced8dbfc9c0d8a8094f8",
"assets/AssetManifest.bin": "71bcc03783b86f12a1b26b01da6125e0",
"assets/AssetManifest.json": "580b8c94b2dd5cc83a22fdc46e2c8883",
"assets/assets/BSCS%2520Back.png": "0b7dfa1ad9060bf205c09796caaffdf6",
"assets/assets/BSCS%2520Degree%2520Back.png": "8aab45f01a9bcae0cc9127886f01fd16",
"assets/assets/BSCS%2520Degree%2520Front.png": "465d20c3be6823d9ae31356806484a21",
"assets/assets/BSCS%2520Front.png": "112056964e4775ec1c1c935470a25d18",
"assets/assets/comsats.jpg": "88c38d0a30d24da3796e492a92f1f3b4",
"assets/assets/contact.jpg": "c5424cc1a94e8da891a66b3d4672560b",
"assets/assets/Domicile.png": "62849b28649ec42dc2b3933d34b13cb5",
"assets/assets/education.jpeg": "294fee8054479ef0e421e7d5d696e026",
"assets/assets/gculahore.jpg": "9c03bb1d9b7d5a62cb29eaf333abd88a",
"assets/assets/icon.png": "9ef2f1422236e0430b41a136da8a7718",
"assets/assets/Intermediate%2520back.png": "a3899ecdbd1146908ce137e7fe0b5e99",
"assets/assets/Intermediate%2520Character%2520Certificate.png": "d1148dbff42c338e928a24b6d400a2c1",
"assets/assets/Intermediate%2520front.png": "1bb2a7bd5f6fc9476ad3c38016f446b1",
"assets/assets/Matric%2520Back.png": "9989750f66f9a70fa26d788366f2e14a",
"assets/assets/Matric%2520Character%2520Certificate.png": "4cd728f07fbb7ee1ebac06b1c4b962fe",
"assets/assets/Matric%2520Front.png": "9ebb4cdd5e8f6ce2a607ddc037c38b4f",
"assets/assets/notes%2520pro%2520plus%2520icon.png": "f377c7f3be8fc254ab7315269868c654",
"assets/assets/notes%2520pro%2520plus%2520ss1.jpeg": "a34ead80a77caadbe06e119adf00c17f",
"assets/assets/notes%2520pro%2520plus%2520ss2.jpeg": "642c7fb1ee2cc6d6e9db6e610f39a357",
"assets/assets/notes%2520pro%2520plus%2520ss3.jpeg": "670eafd31c93224edbbd08c267a00dda",
"assets/assets/notes%2520pro%2520plus%2520ss4.jpeg": "5b84f978d7e2d90dfe141a41a88176ed",
"assets/assets/notes%2520pro%2520plus%2520ss5.jpeg": "d5835d35387f1d5fb9587c8819d0a006",
"assets/assets/notes%2520pro%2520plus%2520ss6.jpeg": "b185329b181a6e24a0eab1469f886a82",
"assets/assets/pattern.jpg": "52e371dc66f1efb0bb2779434a7c03fc",
"assets/assets/PTCL%2520Certificate.png": "a8700ae3404c2e455b46be4ab4c2792d",
"assets/assets/school.jpg": "c63a976bc88f415cfd7c522d5e50b369",
"assets/assets/school2.jpg": "4b82e470914e70ba303dd78a5e79cb15",
"assets/assets/skills.jpg": "9e2935211c538a20c2bcbba1930d4867",
"assets/assets/work.jpg": "e5a392250e3bf56342054e1dd3b62bfd",
"assets/assets/zainshakeelcover.png": "741e6063a4de3bc2fca36879d99cb9ef",
"assets/assets/zainshakeel_cv.pdf": "69e02c071a0632df08b725983fa6557d",
"assets/FontManifest.json": "84ee1b232be042f911ee402e3e4a36b0",
"assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/fonts/Lato-Italic.ttf": "5d22f337a040ae2857e36e7c5800369b",
"assets/fonts/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/fonts/Lato-LightItalic.ttf": "2404a6da847c878edbc8280745365cba",
"assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/fonts/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/fonts/MaterialIcons-Regular.otf": "03cd023b693617e35dba6bba14d2432e",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/hashbazarseller/hbseller1.jpg": "ae3a6124430e79c7184a5dff944505a9",
"assets/hashbazarseller/hbseller2.jpg": "2de0838dcec58c349a5e6d48f1cf3e49",
"assets/hashbazarseller/hbseller3.jpg": "4d38f7f4e4ed5f9561241f27266b38af",
"assets/hashbazarseller/hbseller4.jpg": "2c66ea160a1034486579cb532990c894",
"assets/hashbazarseller/hbseller5.jpg": "be298c391d13dfe1b101b9bcd55396b8",
"assets/hashbazarseller/hbseller6.jpg": "7ed714d5a1d3d8b9e1cfe843b6346cdb",
"assets/hashbazarshopping/hashbazar1.jpg": "acd7de29b1582a9d1eff0f3112c0b53d",
"assets/hashbazarshopping/hashbazar2.jpg": "e7eb2897c889706e616bf2e052644d1f",
"assets/hashbazarshopping/hashbazar3.jpg": "da08cfe0be79dcca1b2748fdc7ef92dc",
"assets/hashbazarshopping/hashbazar4.jpg": "9ae2a52420caf9c37d44f3cd121ef4ea",
"assets/hashbazarshopping/hashbazar5.jpg": "741fdd2bd56d44b5bc045e00d7525948",
"assets/hashbazarshopping/hashbazar6.jpg": "9d6cbce2296b96984f1320e552613e02",
"assets/hashbazarshopping/hashbazaricon.png": "6e33883c20c6f8efdeffa07e70dbe0dd",
"assets/jauneliaallbooks/je1.jpg": "b0d6c3887d15264cb88ee1ee5a50dcb5",
"assets/jauneliaallbooks/je2.jpg": "0c8e322f07bbb15facec927dad7dd9c6",
"assets/jauneliaallbooks/je3.jpg": "1bce63ccc0e6d4e38eac67f50652f47a",
"assets/jauneliaallbooks/je4.jpg": "0c03a21392135dc05747c19c2c2e532d",
"assets/jauneliaallbooks/je5.jpg": "9e5128a05cf9dc524a3e58a87f8d03ae",
"assets/jauneliaallbooks/je6.jpg": "1aab9dd79892ed18390484694130a034",
"assets/jauneliaallbooks/playstore.png": "0532cd3002990502e8880d1d4d25193f",
"assets/NOTICES": "666271ac017492e5ced4b864cec5fd3b",
"assets/O5ChatSocialApp/o5chat1.jpg": "40f93183329403658150e6fe248a2543",
"assets/O5ChatSocialApp/o5chat2.jpg": "a0b221ba1d9a4ef82d2cde6e82553696",
"assets/O5ChatSocialApp/o5chat3.jpg": "2bc7c2488f071089fe30bcb9d62319c6",
"assets/O5ChatSocialApp/o5chat4.jpg": "8392b798d112075f68c4f70d3035ad6d",
"assets/O5ChatSocialApp/o5chat5.jpg": "eedb4eaf75ff4f8fc5f7281d5fa1de5b",
"assets/O5ChatSocialApp/o5chat6.jpg": "bc05a30020777a87f6db997772bd180e",
"assets/O5ChatSocialApp/o5chatlogo.png": "0d03485ebae8a709b294a64167e8bda5",
"assets/O5ChatSocialApp/o5social1.jpg": "4791ca91e41ab5b636a37bf0e869dc1d",
"assets/O5ChatSocialApp/o5social2.jpg": "09aded42e873dce2b6657990c42bd6fa",
"assets/O5ChatSocialApp/o5social3.jpg": "a975abb63d8af54189fe9cbde7b10b59",
"assets/O5ChatSocialApp/o5social4.jpg": "cdf5f9f77ba182de195445d1fcf1f2d6",
"assets/O5ChatSocialApp/o5social5.jpg": "ca77fe4fdf7fec5262507fe316327bbd",
"assets/O5ChatSocialApp/o5social6.jpg": "3c8b156f9cf6a6b9fbac3e0a6eadee02",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "431c352d26fc46305f1090f6a5db814c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/weatherappimages/appstore%2520icon.png": "73cfba76309cd1492ddd731154fb3505",
"assets/weatherappimages/weather1.jpg": "6a9ce486a0d8e84937fecb1b7ac563b0",
"assets/weatherappimages/weather2.jpg": "f899f2080ac80d18fd5c9de06e63aa14",
"assets/weatherappimages/weather3.jpg": "5f7a372c4ac46210ce189003b07c38fd",
"assets/weatherappimages/weather4.jpg": "c883effff5fe1dfc6bf52df3a1b68ec5",
"assets/weatherappimages/weather5.jpg": "9f83c7ff275a2710d4371e28b4f4667d",
"assets/weatherappimages/weather6.jpg": "c1296a5563442167cc9dd769b771902f",
"assets/weatherappimages/weather7.jpg": "c15ca38f8aa767e6039040ec5effc405",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "24f0884945e00e5d30ffafa2a0cbcb33",
"firebase.json": "bf5cc2af42a6b16ff2b89e1731d0c550",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a4ad4c9a53ba81afc1ea19f6c912ab50",
"/": "a4ad4c9a53ba81afc1ea19f6c912ab50",
"main.dart.js": "ff96cdfa7446bfed51428be910afff62",
"manifest.json": "98eb9a14530e0ba2fefd040e0cf8c03d",
"version.json": "0852618a1a820875061209c4835942f9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
