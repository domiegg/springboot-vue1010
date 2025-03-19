const base = {
    get() {
        return {
            url : "http://localhost:8080/xiangzhengfuguanli/",
            name: "xiangzhengfuguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiangzhengfuguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "乡政府管理系统"
        } 
    }
}
export default base
