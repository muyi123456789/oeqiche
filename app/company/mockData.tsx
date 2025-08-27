const mapData = [
  { name: '北京市', value: 87 },
  { name: '天津市', value: 45 },
  { name: '河北省', value: 63 },
  { name: '山西省', value: 29 },
  { name: '内蒙古自治区', value: 12 },
  { name: '辽宁省', value: 54 },
  { name: '吉林省', value: 38 },
  { name: '黑龙江省', value: 71 },
  { name: '上海市', value: 93 },
  { name: '江苏省', value: 67 },
  { name: '浙江省', value: 88 },
  { name: '安徽省', value: 52 },
  { name: '福建省', value: 76 },
  { name: '江西省', value: 41 },
  { name: '山东省', value: 90 },
  { name: '河南省', value: 58 },
  { name: '湖北省', value: 64 },
  { name: '湖南省', value: 33 },
  { name: '广东省', value: 95 },
  { name: '广西壮族自治区', value: 27 },
  { name: '海南省', value: 19 },
  { name: '重庆市', value: 74 },
  { name: '四川省', value: 82 },
  { name: '贵州省', value: 36 },
  { name: '云南省', value: 69 },
  { name: '西藏自治区', value: 8 },
  { name: '陕西省', value: 50 },
  { name: '甘肃省', value: 23 },
  { name: '青海省', value: 5 },
  { name: '宁夏回族自治区', value: 14 },
  { name: '新疆维吾尔自治区', value: 31 },
  { name: '台湾省', value: 77 },
  { name: '香港特别行政区', value: 61 },
  { name: '澳门特别行政区', value: 42 }
]
// 所有数据按行业分组
const ProductData = [
  {
    title: '半导体',
    companies: [
      {
        title: '海光信息技术股份有限公司',
        logo: '#',
        description: '主营：激光雷达处理器SoC芯片,计算机CPU激光雷达处理器SoC芯片,计算机CPU激光雷达处理器SoC芯片,计算机CPU',
      },
      {
        title: '中芯国际集成电路制造（上海）有限公司',
        logo: '#',
        description: '主营：光掩模',
      },
      {
        title: '海光信息技术股份有限公司',
        logo: '#',
        description: '主营：激光雷达处理器SoC芯片,计算机CPU',
      },
      {
        title: '中芯国际集成电路制造（上海）有限公司',
        logo: '#',
        description: '主营：光掩模',
      },
      {
        title: '海光信息技术股份有限公司',
        logo: '#',
        description: '主营：激光雷达处理器SoC芯片,计算机CPU',
      },
      {
        title: '中芯国际集成电路制造（上海）有限公司',
        logo: '#',
        description: '主营：光掩模',
      },
    ],
  },
  {
    title: '新能源',
    companies: [
      {
        title: '宁德时代新能源科技股份有限公司',
        logo: '#',
        description: '主营：动力电池,储能系统',
      },
      {
        title: '比亚迪股份有限公司',
        logo: '#',
        description: '主营：电动汽车,电池,半导体',
      },
      {
        title: '宁德时代新能源科技股份有限公司',
        logo: '#',
        description: '主营：动力电池,储能系统',
      },
      {
        title: '比亚迪股份有限公司',
        logo: '#',
        description: '主营：电动汽车,电池,半导体',
      },
      {
        title: '宁德时代新能源科技股份有限公司',
        logo: '#',
        description: '主营：动力电池,储能系统',
      },
      {
        title: '比亚迪股份有限公司',
        logo: '#',
        description: '主营：电动汽车,电池,半导体',
      },
    ],
  },
  {
    title: '生物医药',
    companies: [
      {
        title: '药明康德',
        logo: '#',
        description: '主营：CRO,新药研发服务',
      },
      {
        title: '恒瑞医药',
        logo: '#',
        description: '主营：抗肿瘤药,创新药',
      },
      {
        title: '药明康德',
        logo: '#',
        description: '主营：CRO,新药研发服务',
      },
      {
        title: '恒瑞医药',
        logo: '#',
        description: '主营：抗肿瘤药,创新药',
      },
      {
        title: '药明康德',
        logo: '#',
        description: '主营：CRO,新药研发服务',
      },
      {
        title: '恒瑞医药',
        logo: '#',
        description: '主营：抗肿瘤药,创新药',
      },
    ],
  },
];
const companyData = [
  {
    name: '苏州启达工程塑料科技有限公司',
    logo: '#',
    mainProducts: '齿轮箱,齿轮,定转子包塑及叶轮,多工序及铜...',
    clients: ['博世', '伊控动力']
  },
  {
    name: '浩盟车料（上海）有限公司',
    logo: '#',
    mainProducts: '',
    clients: ['延锋彼欧', '凌云科技', '明芳', '马勒']
  },
  {
    name: '佛山富士离合器有限公司',
    logo: '#',
    mainProducts: 'EV用定子,EV用中空轴,冷却薄片,触媒,湿式...',
    clients: ['现代汽车', '福特', '孚祯动力', '麦格纳', '明电舍']
  },
  {
    name: '江苏华利精密齿轮制造有限公司',
    logo: '#',
    mainProducts: '汽车齿轮,新能源电机轴',
    clients: ['苏州汇川', '八方电气', '日本电产', '宁波双林', '方...']
  },
  {
    name: '上海妙可士材料科技有限公司',
    logo: '#',
    mainProducts: '模切标签,模切绝缘片,导热凝胶,导热垫片,...',
    clients: ['蔚来科技', '采埃孚', '海拉电子', '海拉', '康迪泰克']
  },
  {
    name: '浙江维连风然传感科技有限公司',
    logo: '#',
    mainProducts: '电机温度传感器,汽车充电座/桩温度传感器,...',
    clients: []
  }
];
const searchList = [
  '发动机',
  '冲压件',
  '五金件'
]


export {
    mapData,
    ProductData,
    companyData,
    searchList
}