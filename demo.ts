import { EnumAPIName } from '../src/types';
import config from './config';

declare global {
    interface Window {
        Vue: any
        ultimateApp: any
    }

    interface Document {}
}

// 所有方法
const keys = Object.keys(EnumAPIName).map(n => {
    const c = config[n] || {};

    return {
        key: n,
        value: `${EnumAPIName[n]}${c.desc}`,
        ...c
    };
});

// 初始化vue实例
 new window.Vue({
    el: '#app',
    data: {
        // sdk方法列表
        sdks: keys,
        sdkSelect: '',
        sdkParams: '',
        isShowParams: false,
        paramString: '',
        result: '',
    },
    computed: {
        sdk() {
            return keys.find(n => n.value === this.sdkSelect) || {};
        }
    },
    methods: {
        onSubmit: function () {
            if (!this.sdkSelect) {
                return this.$message('请选择要执行的sdk方法');
            }

            const { params, name } = this.sdk;

            if (!name) {
                return this.$message('未找到该方法');
            }

            if (!params) {
                // 直接调用方法
                window.ultimateApp[name]((res) => {
                    try {
                        this.result = JSON.stringify(res, null, 4);
                    } catch (err) {
                        console.log(err);
                    }
                });

                return;
            }

            // 有参数
            const isString = typeof params === 'string';

            if (isString) {
                window.ultimateApp[name](this.sdkParams, (res) => {
                    try {
                        this.result = JSON.stringify(res, null, 4);
                    } catch (err) {
                        console.log(err);
                    }
                });

                return;
            }

            window.ultimateApp[name](JSON.parse(this.sdkParams), (res) => {
                try {
                    this.result = JSON.stringify(res, null, 4);
                } catch (err) {
                    console.log(err);
                }
            });
        },
        onSelectChange: function () {
            const { params } = this.sdk;

            // 不用传参数
            if (!params) {
                this.isShowParams = false;
                this.sdkParams = '';
                
                return;
            }

            const isString = typeof params === 'string';

            this.isShowParams = true;
            this.paramString = isString
                ? '该方法接收参数为字符串'
                : '该方法接收参数为对象';
            
            this.sdkParams = isString ? params : JSON.stringify(params, null, 4);
        }
    }
});
