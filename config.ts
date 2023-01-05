export default {
    GetVersion: {
        name: 'getVersion',
        desc: "获取版本号",
    },
    CheckExist: {
        name: 'checkExist',
        desc: "检查是否有某个方法",
        params: 'isWifiConnected'
    },
    SetTitle: {
        name: 'setTitle',
        desc: "设置标题",
        params: '测试'
    },
    LHHeight: {
        name: 'getLHHeight',
        desc: "获取刘海高度",
    },
    OpenWebView: {
        name: 'openWebView',
        desc: "打开新webview",
        params: {
            isTitle: '1',
            title: 'abc',
            isNavigationbar: '1',
            requestUrl: 'https://m.58.com/bj/?reform=pcfront',
        }
    },
    CloseWebView: {
        name: 'closeWebView',
        desc: "关闭当前webview",
    },
    OpenMp: {
        name: 'openMp',
        desc: "打开小程序",
        params: {
            userName: 'gh_40a9834b6611',
            path: 'pages/serviceList/index?cateId=12037',
            miniProgramType: 'preview'
        }
    },
    GetImages: {
        name: 'getImages',
        desc: "调用相册页面获取图片",
        params:  {
            maxCount: 1,
        }
    },
    CallCamera: {
        name: 'callCamera',
        desc: "唤起相机拍拍照",
        params: {
            type: 0
        }
    },
    UpdateOrderList: {
        name: 'updateOrderList',
        desc: "更新订单列表",
        params: {
            orderID: '123'
        }
    },
    YChallenge: {
        name: 'yChallenge',
        desc: "人脸识别",
        params: {},
    },
    YChallengeFinish: {
        name: 'challengeCompleted',
        desc: "人脸识别完成",
        params: {
            challengeResultType: '0'
        },
    },
    ShareImageToWxFriends: {
        name: 'shareImageToWxFriends',
        desc: "分享图片到微信朋友",
        params: {},
    },
    ShareImageToWxCircle: {
        name: 'shareImageToWxCircle',
        desc: "分享图片到微信朋友圈",
        params: {
            url: 'https://pic1.58cdn.com.cn/o2o/n_v2276fbace5c9543298320400fc1ec9026.png'
        },
    },
    ShareMiniProgramForWeb: {
        name: 'shareMiniProgramForWeb',
        desc: "分享小程序给微信好友",
        params: {},
    },
    ShareWechatWebPage: {
        name: 'shareWeChatWebPage',
        desc: "分享网页给好友或朋友圈",
        params: {},
    },
    GetCityInfo: {
        name: 'getCityInfo',
        desc: "获取选中的城市信息（搬家通用）",
        params: {
            cityName: '北京',
            cityId: '1',
        },
    },
    GetLatLon: {
        name: 'getLatLon',
        desc: "获取定位",
    },
    CallPhone: {
        name: 'callPhone',
        desc: "打电话",
        params: '123456',
    },
    CallFlutterChangeRole: {
        name: 'callFlutterChangeRole',
        desc: "调起选择角色页面",
    },
    CallPayCenter: {
        name: 'callPayCenter',
        desc: "唤起支付",
        params: {},
    },
    CallPayWeChatOrAli: {
        name: 'callPayWeChatOrAli',
        desc: "唤起支付-跳过收银台",
        params: {},
    },
    QrCodeScan: {
        name: 'qrCodeScan',
        desc: "唤起扫码页面",
    },
    VideoInterview: {
        name: 'videoInterview',
        desc: "视频面试",
    },
    IsWifiConnected: {
        name: 'isWifiConnected',
        desc: "判断当前环境是否为wifi",
    },
    BackgroundCheck: {
        name: 'backgroundCheck',
        desc: "背景调查方法",
        params: {
            status: true
        },
    },
    ServiceAreaLocation: {
        name: 'serviceAreaLocation',
        desc: "h5选择区域完成后通知给native",
        params: {},
    },
    Logout: {
        name: 'logout',
        desc: "登出",
    },
    GetUserInfo: {
        name: 'getUserInfo',
        desc: "获取用户信息",
    },
    CallMapNavigation: {
        name: 'callMapNavigation',
        desc: "唤起导航",
        params: {
            lat: '39.984215',
            lon: '116.506355',
            name: '',
        },
    },
    ChangePassport: {
        name: 'changePassword',
        desc: "修改密码",
    },
    StartFaceBankCertify: {
        name: 'startFaceBankCertify',
        desc: "开启认证",
        params: {},
    },
    FaaContractSigningPermission: {
        name: 'faaContractSigningPermission',
        desc: "法大大服务合同签约",
        params: {},
    },
    SetWebReturnParams: {
        name: 'setWebReturnParams',
        desc: "WebView回传参数",
        params: {},
    },
    FamilyPermissions: {
        name: 'familyPermissions',
        desc: "家服权限状态判断",
        params: {
            type: '1'
        }
    },
    ShowOrHideTitleBar: {
        name: 'showOrHideTitleBar',
        desc: "显示或隐藏顶部Titlebar",
        params: {
            titlebarType: '1'
        }
    },
    OpenPhotoBrowser: {
        name: 'openPhotoBrowser',
        desc: '查看大图',
        params: {
            currentIndex: 1,
            imageUrls: [
                'https://pic3.58cdn.com.cn/o2o/n_v230daf0a36d394007af06072d08e5726d.png',
                'https://pic4.58cdn.com.cn/o2o/n_v2e1902da977274fd9a3fd6c1059d06130.png',
                'https://pic3.58cdn.com.cn/o2o/n_v2b5b99c095fe344e78018e3f8685b041a.png',
                'https://pic1.58cdn.com.cn/o2o/n_v22a243f31a2c4496d844f78430add99d9.png',
            ]
        }
    },
    OpenPDFReaderPage: {
        name: 'openPDFReaderPage',
        desc: 'WebView打开PDF',
        params: {},
    },
    OpenMeetingPage: {
        name: 'openMeetingPage',
        desc: '唤起阿姨面试',
        params: {
            "roomId": "11",
            "roomCode": "111",
            "userName": "222",
            "clientName": "222",
            "biz": "jtfw",
            "appId": "12121",
            "requestId": "111",
            "hostCode": "111",
            "isSecrect": 1,
            "isHost": 1
        },
    },
    WebCallSavePicture: {
        name: 'webCallSavePicture',
        desc: 'web保存图片',
        params: {
            "imageUrl": "https://pic5.58cdn.com.cn/o2o/n_v2821228b5e03d44538340dd7d0c58afaa.png"
        },
    },
    GetSomeInfo: {
        name: 'getSomeInfo',
        desc: 'FE获取一些信息',
        params: {
            xxzlCId: '1',
            simIp: '1',
            wifiIp: '1',
            wifiName: '1',
            location: '1',
            coordinateType: '1',
        }
    },
    DoLaunchOffAccount: {
        name: 'doLaunchOffAccount',
        desc: '账户与安全(调起账户注销)'
    },

    WebGetCropImage: {
        name: 'webGetCropImage',
        desc: '调用相机或者相册获取图片并裁剪',
        params: {
            type: '0'
        }
    },
    OpenFlutterPage: {
        name: 'openFlutterPage',
        desc: 'native跳转flutter 页面',
        params: {
            path: '',
            arguments: {}
        }
    },
    WebSetKV: {
        name: 'webSetKV',
        desc: 'Web调用-保存KV值',
        params: {
            key: '',
            value: '',
            saveType: '1'
        }
    },
    WebGetV: {
        name: 'webGetV',
        desc: 'Web调用-获取Value',
        params: {
            key: '',
            saveType: '1'
        }
    },
    OpenWebPageWithBrowser: {
        name: 'openWebPageWithBrowser',
        desc: 'Web调用-外部浏览器打开Web页面',
        params: {
           url: ''
        }
    },
    MoveTakePhotoComplete: {
        name: 'moveTakePhotoComplete',
        desc: '搬家车辆拍照完成回调',
        params: {
            orderId: '',
            buyer: '',
            contact: '',
        }
    },
    OpenUrlWithCheckGesturePassword: {
        name: 'openUrlWithCheckGesturePassword',
        desc: '打开页面前进行手势密码检测',
        params: {
           url: ''
        }
    },
    GetMeetingSDKVersion: {
        name: 'getMeetingSDKVersion',
        desc: "获取面试SDK版本号",
    },
    
};
