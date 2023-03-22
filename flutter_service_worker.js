'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ed64f95f0f9b06a16ab56d5e7ccec062",
"index.html": "11fce8efa395432bb367a1dcfd9258be",
"/": "11fce8efa395432bb367a1dcfd9258be",
"main.dart.js": "42f904019caa4c852680a97959060957",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5fbaaeb364581c1d39b717d8f3ea5572",
"main.dart.js_1.part.js": "f73caae73d5161f6a439137323967ce2",
"assets/AssetManifest.json": "9880778d8c77e1dae99d6eb2fa4b77e4",
"assets/NOTICES": "ade973443a550a60c023a4ada936303c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/mover/assets/images/icon_tabbar_message_selected.png": "a5c855eb6a156cdcb61681e6c31a8b3f",
"assets/packages/mover/assets/images/mover_tel_selected.png": "4ec6fd5c87e081ff7d7edf469117b6c8",
"assets/packages/mover/assets/images/mover_ic_service_top_income.png": "46600842ea2f999a3c272ab73ec74aea",
"assets/packages/mover/assets/images/icon_star.png": "52e92022f062685f4112751fe1ada43b",
"assets/packages/mover/assets/images/mover_iv_boy_user.png": "044ea888aa112d03bef8a17838762e3f",
"assets/packages/mover/assets/images/mover_mine_change_role.png": "222a1619e6bbccd4b6dc83b0981460b1",
"assets/packages/mover/assets/images/ic_close.png": "985977c237e98963eeb15c7f845c12ad",
"assets/packages/mover/assets/images/icon_certify_way_choose_bg.png": "e07c88a7c7a111bc59031ec9f7fcc240",
"assets/packages/mover/assets/images/mover_ic_poster_loading.png": "0ea38628f9f2dc617a62a3cfec89afad",
"assets/packages/mover/assets/images/mover_ic_poster_double_sign.png": "45092a82efee1636bc9014906c8febf4",
"assets/packages/mover/assets/images/mover_ic_close.png": "985977c237e98963eeb15c7f845c12ad",
"assets/packages/mover/assets/images/mover_noitem_img_appointment.png": "c9504350d817d457f94d78ece75ec47c",
"assets/packages/mover/assets/images/mover_icon_go.png": "ace263beaff5eb9c27227e0d2835c3a1",
"assets/packages/mover/assets/images/mover_icon_tabbar_promote_normal.png": "cdd8dd7a3eb3f88375d1a899fb3bbeae",
"assets/packages/mover/assets/images/mover_order_privacy_phone_edit.png": "7ceb787326bbba2920dcc5db1c4f5d44",
"assets/packages/mover/assets/images/mover_ic_poster_left_bottom.png": "5072c241f3acebfb1e603935e0382228",
"assets/packages/mover/assets/images/mover_ic_service_business_down.png": "d0daff78587ddc1abbf57b3a0fce0a1a",
"assets/packages/mover/assets/images/ic_page_back.png": "b700de994f78e2ed78339c696383797b",
"assets/packages/mover/assets/images/icon_tab_bar_order_selected.png": "e87c5afeaf65c117986e0b4d681579a7",
"assets/packages/mover/assets/images/mover_default_image.png": "f8a69d62edb461ebe43fed8d6cace98d",
"assets/packages/mover/assets/images/icon_tab_bar_order_normal.png": "a979f0dcd1c5dee789c3a20a06db5e8f",
"assets/packages/mover/assets/images/mover_icon_tel.png": "5e99e41e07273cfc0c54f78f95f8d213",
"assets/packages/mover/assets/images/icon_new_message.png": "6ab967988753a2ba2dba66b97cd39e79",
"assets/packages/mover/assets/images/mover_ic_save_image.png": "7d6981249b2668f74b18cbb50d8b2604",
"assets/packages/mover/assets/images/ic_mover_settle_desc_1.png": "204549f3b05812c7c2c5ae55e618ab28",
"assets/packages/mover/assets/images/ic_mover_settle_desc_3.png": "326ea7b93404ccbda8ba3fcc45278e57",
"assets/packages/mover/assets/images/img_mover_settle_desc_1.png": "43f5e1aca27637fe530cf4f097449d3b",
"assets/packages/mover/assets/images/mover_img_empty_service.png": "623085259f6cbd503099e199e89e857c",
"assets/packages/mover/assets/images/ic_mover_message_change_role.png": "3dcb248e34422ed18e8b76e5b2309ab4",
"assets/packages/mover/assets/images/ic_mover_settle_desc_2.png": "e889ed0a143ed7a03a35f3ff987ceb74",
"assets/packages/mover/assets/images/mover_my_info_def.png": "4ab2ac873e79e3bf05500145000ba739",
"assets/packages/mover/assets/images/mover_ic_we_chat_friend.png": "cd78b0d5497c2adcd07ea7dafd9975ac",
"assets/packages/mover/assets/images/mover_tel_un_selected.png": "53f4e61a84847136349e7e00e853071f",
"assets/packages/mover/assets/images/icon_tabbar_message_normal.png": "f96b523a38ebd1b1ffba798cf0415ce2",
"assets/packages/mover/assets/images/icon_tabbar_mine_normal.png": "ccc7c9e05f045362764586e74bf7887d",
"assets/packages/mover/assets/images/mover_img_qr_code_failure.png": "2d514ace171f83b1ec9c16d48cda62da",
"assets/packages/mover/assets/images/mover_icon_tabbar_promote_selected.png": "c169e6e3eac23f2a76e080df3a7f822e",
"assets/packages/mover/assets/images/icon_arrow_right.png": "0ea2311988e6c7cf213ed922d82659cf",
"assets/packages/mover/assets/images/mover_img_order_no_location_permission.png": "388842bf5a3f7f2df78c6bbd58796a22",
"assets/packages/mover/assets/images/mover_ic_poster_top_logo.png": "9182f5f9333b9d51c82435e7c8e058df",
"assets/packages/mover/assets/images/message_address_icon.png": "2ecb72832b54c9391a92cffaf677ad72",
"assets/packages/mover/assets/images/mover_icon_custom_calendar.png": "b423064733492fbbbe4c104554a7891a",
"assets/packages/mover/assets/images/icon_tabbar_mine_selected.png": "9460d222b4d29122a6551771aaf5f307",
"assets/packages/mover/assets/images/mover_icon_home_address.png": "bc5991d7623d5197a863d920cbd771ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/ultimate/assets/images/img_mine_page_level_card_back_1.png": "ff81f4ba40760ae385da060a8a73f340",
"assets/packages/ultimate/assets/images/img_empty_service.png": "623085259f6cbd503099e199e89e857c",
"assets/packages/ultimate/assets/images/img_new_settle_in_take_photo_desc.png": "d2a04abfcabf1dd18de4edb3116b8ed1",
"assets/packages/ultimate/assets/images/ic_month_report_share.png": "90fe0524474a5c3e4e0ff492b18fdc58",
"assets/packages/ultimate/assets/images/icon_user_level_gold.png": "1a7f5788205e8bdc3cae8125307f2b5c",
"assets/packages/ultimate/assets/images/icon_tabbar_message_selected.png": "a5c855eb6a156cdcb61681e6c31a8b3f",
"assets/packages/ultimate/assets/images/aunt_level_bronze.png": "9beec338a7fff255b08729fb6a12637f",
"assets/packages/ultimate/assets/images/icon_user_level_black_gold.png": "9cb5888f4fa27e544f60da3584bc4fb0",
"assets/packages/ultimate/assets/images/img_mine_page_level_card_back_2.png": "544fda4046664665957ccec8edb9a4f6",
"assets/packages/ultimate/assets/images/order_list_reward.png": "afb1236362e6168cb9fd7a673164bcf4",
"assets/packages/ultimate/assets/images/code.png": "970c7f47b344f9fb388bc53c379ff8f4",
"assets/packages/ultimate/assets/images/icon_user_level_diamond.png": "8eaefd5c87ecbac7d6712d79a860535a",
"assets/packages/ultimate/assets/images/aunt_level_yellow.png": "f29ce69ff38d2ce71f6cb82188b1112a",
"assets/packages/ultimate/assets/images/ic_aunt_new_order_guide.png": "d397431944c292b0cda55876789e50a0",
"assets/packages/ultimate/assets/images/icon_star.png": "52e92022f062685f4112751fe1ada43b",
"assets/packages/ultimate/assets/images/img_mine_page_level_card_back_3.png": "fe72324f413a45226e94ae94b8b11464",
"assets/packages/ultimate/assets/images/icon_mine_change_role.png": "222a1619e6bbccd4b6dc83b0981460b1",
"assets/packages/ultimate/assets/images/icon_sign_success.png": "0b0e2244f2205d1fb4f3c0ece3440c3e",
"assets/packages/ultimate/assets/images/img_aunt_settle_desc_1.png": "43f5e1aca27637fe530cf4f097449d3b",
"assets/packages/ultimate/assets/images/ic_live_event_check_in.png": "435424d009b7abf6c84d71d3768cbed7",
"assets/packages/ultimate/assets/images/icon_tabbar_order_selected.png": "e87c5afeaf65c117986e0b4d681579a7",
"assets/packages/ultimate/assets/images/ic_person_edit.png": "699132398d59a1be067b0dd58c883621",
"assets/packages/ultimate/assets/images/aunt_scanning.png": "49eff61b59ea4141a5c1a33ae3f021ad",
"assets/packages/ultimate/assets/images/aunt_level_small_gold.png": "7f8bc651a3587ac38a3751b18c2da712",
"assets/packages/ultimate/assets/images/icon_custom_calendar.png": "b423064733492fbbbe4c104554a7891a",
"assets/packages/ultimate/assets/images/img_order_no_location_permission.png": "388842bf5a3f7f2df78c6bbd58796a22",
"assets/packages/ultimate/assets/images/icon_popup_bubbles.png": "8a413d50290998065e7113b07978e630",
"assets/packages/ultimate/assets/images/new_settle_in_guide_person.png": "98070b8bae4085d7c416ecb9febd9a68",
"assets/packages/ultimate/assets/images/ic_service_top_income.png": "46600842ea2f999a3c272ab73ec74aea",
"assets/packages/ultimate/assets/images/ic_close.png": "985977c237e98963eeb15c7f845c12ad",
"assets/packages/ultimate/assets/images/order_list_del.png": "91e22a1974b80e971dd773f02b20bd66",
"assets/packages/ultimate/assets/images/icon_certify_way_choose_bg.png": "ecd9152775298002d3f7f98a66a88045",
"assets/packages/ultimate/assets/images/ic_camera.png": "b55fe70d11250e2039ec83e89806b5a6",
"assets/packages/ultimate/assets/images/ic_month_report_top.png": "0f8ae5b9cda3107958965467be1bcb4f",
"assets/packages/ultimate/assets/images/ic_save_image.png": "7d6981249b2668f74b18cbb50d8b2604",
"assets/packages/ultimate/assets/images/aunt_default_image.png": "f8a69d62edb461ebe43fed8d6cace98d",
"assets/packages/ultimate/assets/images/aunt_local_news_video.png": "64e347f4d99a0ceacc4e8de7f1408860",
"assets/packages/ultimate/assets/images/img_sign_in_tips_top.png": "c88d049afe33ea77cb6ef80328d4ef9b",
"assets/packages/ultimate/assets/images/messages_Icon.png": "35a8f3f5a4e0bea65d67b761dd8ba206",
"assets/packages/ultimate/assets/images/icon_home_address.png": "bc5991d7623d5197a863d920cbd771ba",
"assets/packages/ultimate/assets/images/icon_supply_add.png": "3a9d123bfa55c54fcbd8af157b3cda0b",
"assets/packages/ultimate/assets/images/aunt_level_small_silver.png": "e4f137410e4f570fd5ad246245f0001f",
"assets/packages/ultimate/assets/images/popup_bubbles.png": "5d8d0026f31a85102c69c21dba317392",
"assets/packages/ultimate/assets/images/icon_setting_change_phone_number.png": "7aa0de911ee328eda7775ffde234a7b1",
"assets/packages/ultimate/assets/images/ic_poster_left_bottom.png": "5072c241f3acebfb1e603935e0382228",
"assets/packages/ultimate/assets/images/ic_poster_text_right.png": "b10767603544442549068a4afe4b5152",
"assets/packages/ultimate/assets/images/aunt_level_black.png": "035e1a3d30efcfbfcb01da784152fdac",
"assets/packages/ultimate/assets/images/icon_medal_arrow_right.png": "2b15ed0d906e31555ddf929d56bc5dec",
"assets/packages/ultimate/assets/images/aunt_level_small_diamond.png": "320fcf2dded890a3046cd26f0a703eda",
"assets/packages/ultimate/assets/images/icon_rod_order.png": "c3870d8359a8846a59ab5f176a1b65ed",
"assets/packages/ultimate/assets/images/ic_live_event_uncheck_in.png": "0b3a910148891087313edae3178f5af6",
"assets/packages/ultimate/assets/images/img_new_settle_in_back_top.png": "5af87cf7b07e43de15f80429d572cf18",
"assets/packages/ultimate/assets/images/icon_user_level_bronze.png": "a1bbc5a7cbbd56eab61b80e79ec42246",
"assets/packages/ultimate/assets/images/icon_go.png": "ace263beaff5eb9c27227e0d2835c3a1",
"assets/packages/ultimate/assets/images/ic_month_report_bottom.png": "4d46fafa072ba47799bf849366830f39",
"assets/packages/ultimate/assets/images/ic_aunt_new_order_call.png": "2bec85c352148321ca781684c97d5ef8",
"assets/packages/ultimate/assets/images/aunt_change_number.png": "a33611166a3e311919879e76eac8fc6f",
"assets/packages/ultimate/assets/images/img_aunt_level_s.png": "430027dbe7d512fa2be7340df2f6a972",
"assets/packages/ultimate/assets/images/img_qr_code_failure.png": "2d514ace171f83b1ec9c16d48cda62da",
"assets/packages/ultimate/assets/images/aunt_change_number_fail.png": "dedac9d025368ebcc39d02b5a48731f9",
"assets/packages/ultimate/assets/images/ic_mine_page_function_down.png": "e67af8d23d77d5e71981155996dea3f7",
"assets/packages/ultimate/assets/images/aunt_local_news_default_image.png": "7a62402b8f2df935d81e35184dcde3f3",
"assets/packages/ultimate/assets/images/aunt_left.png": "9e11a4a4edfb2a602c07ce6c81cd15ce",
"assets/packages/ultimate/assets/images/ic_poster_double_sign.png": "45092a82efee1636bc9014906c8febf4",
"assets/packages/ultimate/assets/images/new_settle_in_guide_arrow_down.png": "65e93e8354123fa23394a128c666e038",
"assets/packages/ultimate/assets/images/bg_fame_wall_bar.png": "e41e037a900acbcebf98ad1b43b2bf16",
"assets/packages/ultimate/assets/images/default_image.png": "f8a69d62edb461ebe43fed8d6cace98d",
"assets/packages/ultimate/assets/images/icon_sign_failue.png": "91ccf22dfb5095baff25a41ec4d9ea65",
"assets/packages/ultimate/assets/images/aunt_them_right.png": "26f6e43cd36242d37255b8d583860231",
"assets/packages/ultimate/assets/images/aunt_level_small_platinum.png": "d69f76a6650feff3ff5fcd468f607381",
"assets/packages/ultimate/assets/images/icon_popup_bubbles_order_top_reward.png": "e73adc04d011729146384c046d128f6a",
"assets/packages/ultimate/assets/images/icon_call.png": "32f272af3193ad08eecbb9ed85bdb77b",
"assets/packages/ultimate/assets/images/keeper_logo_icon.png": "1426d43aa47e7435f79fc091575dc92a",
"assets/packages/ultimate/assets/images/img_new_settle_in_take_photo_default.png": "99235faebc62cd7fb77a665baa130a43",
"assets/packages/ultimate/assets/images/ic_we_chat_friend.png": "cd78b0d5497c2adcd07ea7dafd9975ac",
"assets/packages/ultimate/assets/images/ic_page_back.png": "b700de994f78e2ed78339c696383797b",
"assets/packages/ultimate/assets/images/icon_tabbar_promote_normal.png": "cdd8dd7a3eb3f88375d1a899fb3bbeae",
"assets/packages/ultimate/assets/images/img_new_settle_in_back_top_guide.png": "32c439df1548cc5281009e9cf70a290e",
"assets/packages/ultimate/assets/images/sys_dialog_medal.png": "50c9975e25a170adc106617cb5b3e0a1",
"assets/packages/ultimate/assets/images/aunt_level_bobo.png": "9457c2ec0cacfdeee434ed3a23d08453",
"assets/packages/ultimate/assets/images/aunt_level_small_bronze.png": "48a3724458af5d28067eb0c2bf7c9775",
"assets/packages/ultimate/assets/images/notice_icon.png": "91a242a9287c89e5a5ecdbf9bf53a282",
"assets/packages/ultimate/assets/images/ic_live_event_act.png": "06de45330ee93a673d774c88f82b740e",
"assets/packages/ultimate/assets/images/icon_my_info_def.png": "4ab2ac873e79e3bf05500145000ba739",
"assets/packages/ultimate/assets/images/icon_medal_arrow_left.png": "e017ff28f3e10889bb143ea131866281",
"assets/packages/ultimate/assets/images/ic_poster_top_logo.png": "28defb9c8595ea50cf259d875ffad2fe",
"assets/packages/ultimate/assets/images/icon_empty_resource.png": "207315d5a962a092f49a6b67f59e1040",
"assets/packages/ultimate/assets/images/img_bg_task.png": "df2c971061e8126b92c38e152e0e0cba",
"assets/packages/ultimate/assets/images/pt_noitem_img_appointment.png": "c9504350d817d457f94d78ece75ec47c",
"assets/packages/ultimate/assets/images/ic_live_event_train.png": "c298b6a0ef513050a7e234528e596733",
"assets/packages/ultimate/assets/images/ic_live_event_passed_exam.png": "b5e2269cc6cec4c4ee908cbd45f92dfd",
"assets/packages/ultimate/assets/images/iv_boy_user.png": "044ea888aa112d03bef8a17838762e3f",
"assets/packages/ultimate/assets/images/icon_rob_selected.png": "05a689b8ccf3c72bbb3a216b71b89fed",
"assets/packages/ultimate/assets/images/sys_dialog_avatar.png": "b9be51cf3f8e0f206ab898c75dcc5cc9",
"assets/packages/ultimate/assets/images/icon_location.png": "515dd67a04f320a2d00dccc931521e5f",
"assets/packages/ultimate/assets/images/ic_grab_an_order.png": "2d26244ff14a8e897b075d62fca0279a",
"assets/packages/ultimate/assets/images/aunt_local_news_label.png": "bc60d6d267657ff638cd5f940a0ffef3",
"assets/packages/ultimate/assets/images/ic_avatar_small_icon_3.png": "b18805cc68cd9e90b0b20bc226336cd9",
"assets/packages/ultimate/assets/images/new_settle_in_guide_da.png": "3ae6fd8ac1da081be37cbab230732861",
"assets/packages/ultimate/assets/images/icon_new_message.png": "6ab967988753a2ba2dba66b97cd39e79",
"assets/packages/ultimate/assets/images/ic_aunt_settle_desc_1.png": "204549f3b05812c7c2c5ae55e618ab28",
"assets/packages/ultimate/assets/images/ic_mine_page_function_up.png": "1a77773feec1c5b3aa9026938b655973",
"assets/packages/ultimate/assets/images/aunt_mock_order_intro.png": "9b693ec245c1c3267e070e4e41faca56",
"assets/packages/ultimate/assets/images/ic_avatar_small_icon_2.png": "a844579a2ae4660eba38cb67974c4da4",
"assets/packages/ultimate/assets/images/aunt_right.png": "47bbc82dde98ea7aace284a4e57fa56f",
"assets/packages/ultimate/assets/images/aunt_level_green.png": "ae0e5b4ae06afcec81e7f5d1ba125e37",
"assets/packages/ultimate/assets/images/aunt_setting_address_more.png": "b01e18a9326adde5add3bffc012f22fa",
"assets/packages/ultimate/assets/images/img_new_settle_in_info_tips.png": "8c6d62f5c32d5e9a9e8e1efa204fb79d",
"assets/packages/ultimate/assets/images/icon_user_level_sliver.png": "09bca621886a3a2a1cd4fb58356ac815",
"assets/packages/ultimate/assets/images/ic_aunt_settle_desc_3.png": "326ea7b93404ccbda8ba3fcc45278e57",
"assets/packages/ultimate/assets/images/ic_aunt_settle_desc_2.png": "e889ed0a143ed7a03a35f3ff987ceb74",
"assets/packages/ultimate/assets/images/aunt_setting_address.png": "73d35d9a7f408e4b040fc461fb68dd0f",
"assets/packages/ultimate/assets/images/ic_avatar_small_icon_1.png": "59414250d2c74a48ad84c2acba69eac3",
"assets/packages/ultimate/assets/images/aunt_local_news_viewed.png": "68083a9957628e2629e17a4be2d7cfb7",
"assets/packages/ultimate/assets/images/icon_fame_wall_medal.png": "d2652529a3d236c5ebf3738bc2b4904f",
"assets/packages/ultimate/assets/images/icon_tabbar_order_normal.png": "a979f0dcd1c5dee789c3a20a06db5e8f",
"assets/packages/ultimate/assets/images/img_accept_top_bg.png": "39a8487663ee1651e13ae86a48fb4d34",
"assets/packages/ultimate/assets/images/icon_tabbar_promote_selected.png": "c169e6e3eac23f2a76e080df3a7f822e",
"assets/packages/ultimate/assets/images/ic_friend_circle.png": "3fcded4460edba47aa0da3bc663ad209",
"assets/packages/ultimate/assets/images/icon_pulltorefresh_arrow.png": "9f4a22c018870abcb9d3bdf1924eca67",
"assets/packages/ultimate/assets/images/img_new_settle_in_guide_auth.png": "06eb3c5a58198cf94371901b534e7066",
"assets/packages/ultimate/assets/images/order_list_bobo.png": "14ceb3eb9a9e942dc91460c03f2b46fe",
"assets/packages/ultimate/assets/images/aunt_level_silver.png": "669d2ccf08c01355644c0df314873e60",
"assets/packages/ultimate/assets/images/icon_supply_page_done.png": "51c6db27756b42c3f50bede099926fec",
"assets/packages/ultimate/assets/images/icon_calendar_month_bg.png": "96e2795bc6f8d05e87575298b07f224f",
"assets/packages/ultimate/assets/images/new_settle_in_guide_arrow_up.png": "f71943bc12bed4418232415fde085837",
"assets/packages/ultimate/assets/images/img_new_settle_in_avatar_bottom.png": "c6da6992a01163aab1e92db67dd206c8",
"assets/packages/ultimate/assets/images/icon_supply_page_close.png": "da06a52f31328e898b08cc508ac5e32d",
"assets/packages/ultimate/assets/images/icon_user_level_platinum.png": "8128c0f9ff3f21ad102009657e02f211",
"assets/packages/ultimate/assets/images/ic_aunt_message_change_role.png": "3dcb248e34422ed18e8b76e5b2309ab4",
"assets/packages/ultimate/assets/images/ic_close_333.png": "b85446e5cec9c8ce43ea7d83507c4686",
"assets/packages/ultimate/assets/images/img_person_page_top.png": "b776830da341c48c6e5d96db12b883cc",
"assets/packages/ultimate/assets/images/icon_medal_close_dialog.png": "eaa109df807e59d14dca332541962dde",
"assets/packages/ultimate/assets/images/img_aunt_level_new.png": "1836f8b9d4f4ba59775cfd92cf3ae78a",
"assets/packages/ultimate/assets/images/icon_tel.png": "5e99e41e07273cfc0c54f78f95f8d213",
"assets/packages/ultimate/assets/images/ic_image_close.png": "fbddca1e93c07c1a4e35a25fd4af15a7",
"assets/packages/ultimate/assets/images/aunt_level_white.png": "867a55eb9f52df530ce491ee1d846096",
"assets/packages/ultimate/assets/images/aunt_sorting.png": "91f2a43d6ac468ca7ed1433fe752793d",
"assets/packages/ultimate/assets/images/icon_tabbar_message_normal.png": "f96b523a38ebd1b1ffba798cf0415ce2",
"assets/packages/ultimate/assets/images/icon_tabbar_mine_normal.png": "ccc7c9e05f045362764586e74bf7887d",
"assets/packages/ultimate/assets/images/ic_month_report_arrow.png": "efecd43f9e05b58a59658bcb12185bba",
"assets/packages/ultimate/assets/images/aunt_level_blue.png": "2e2166b2e3fc6a11ab3c4e4e6aa7a710",
"assets/packages/ultimate/assets/images/icon_settle_selected.png": "378f52059d1de3b08c2f4d33f16fd374",
"assets/packages/ultimate/assets/images/img_test_poster_cover.png": "a17e13c0f3a7b83f67ecd09389ee7d37",
"assets/packages/ultimate/assets/images/img_qr_code_link.png": "a5034b6de02e1779db7ec80884f83f69",
"assets/packages/ultimate/assets/images/img_aunt_level_abcd.png": "61939fcdbbd8f6c4061afb9ef49ee633",
"assets/packages/ultimate/assets/images/aunt_level_platinum.png": "3d7bbe8a7231dedabeb0ac581a24a574",
"assets/packages/ultimate/assets/images/ic_service_business_down.png": "d0daff78587ddc1abbf57b3a0fce0a1a",
"assets/packages/ultimate/assets/images/img_new_settle_in_guide_video.png": "4912268806b37b5c7a1d4965d021efb7",
"assets/packages/ultimate/assets/images/img_new_settle_in_take_photo_icon.png": "c5eee975287c8f613e01616d1f4ab495",
"assets/packages/ultimate/assets/images/aunt_medal.png": "a3bd0b77458d5b47177a30ac0d81ed4d",
"assets/packages/ultimate/assets/images/icon_arrow_right.png": "0ea2311988e6c7cf213ed922d82659cf",
"assets/packages/ultimate/assets/images/new_settle_in_guide_wen.png": "acb25e3734d1e41b09bc8e1cb4d39a29",
"assets/packages/ultimate/assets/images/notice_close_icon.png": "58a8cd965999ebb1c5c47b54a32c99f3",
"assets/packages/ultimate/assets/images/ic_month_report_mine.png": "3f2f0f2812c934f9e665b0dd4e42d717",
"assets/packages/ultimate/assets/images/ic_poster_loading.png": "0ea38628f9f2dc617a62a3cfec89afad",
"assets/packages/ultimate/assets/images/icon_person_head_edit.png": "cbcd6c16723c8b18b39e9a20c6c115b8",
"assets/packages/ultimate/assets/images/message_address_icon.png": "2ecb72832b54c9391a92cffaf677ad72",
"assets/packages/ultimate/assets/images/ic_live_event_no_exam.png": "6036d5ee0a578289ba176ae4f5933e70",
"assets/packages/ultimate/assets/images/sys_dialog_popup_close.png": "f4979fe90a24f5fd88153c746eb3c81c",
"assets/packages/ultimate/assets/images/img_month_report_back_white.png": "9a4a089de21294295c140286f0300b6f",
"assets/packages/ultimate/assets/images/icon_arrow_down.png": "2e639f300f09a99aa216f63b81c758b7",
"assets/packages/ultimate/assets/images/ic_poster_text_left.png": "38a6c9d1bba988f87039b6077f5e4cee",
"assets/packages/ultimate/assets/images/icon_tabbar_mine_selected.png": "9460d222b4d29122a6551771aaf5f307",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
