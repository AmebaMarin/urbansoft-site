// 简体中文内容。[DRAFT] 标记的为待确认的临时文案。
export default {
  slug: 'zh-cn', htmlLang: 'zh-CN', og: 'zh_CN', langName: '简体中文',
  site: { name: 'UrbanSoft', brand: 'URBANSOFT', desc: '基于面向公共机构的软件开发与运维经验，提供系统规划、建设与维护的IT企业。' },
  ui: { skip: '跳到正文', menu: '菜单', contact: '联系我们', more: '了解详情', home: 'URBANSOFT 首页', lang: '语言', draftNote: '说明' },
  nav: { company: '公司介绍', business: '业务领域', technology: '技术能力', projects: '服务经验', contact: '联系我们' },

  home: {
    title: 'URBANSOFT | 软件开发与运维 IT 企业',
    desc: 'URBANSOFT 基于面向公共机构的软件开发与运维经验，提供系统规划、建设与维护服务。',
    hero: { // [DRAFT] 临时标语
      eyebrow: 'IT SERVICES',
      h1: '让技术价值转化为业务成果。',
      lead: '从业务需求出发设计系统，并对交付后的运维负责。',
      primary: '咨询项目', secondary: '查看业务领域'
    },
    facts: [['成立时间', '2023年8月'], ['开发与运维经验', '19年以上（创始人）'], ['主要客户', '公共机构']],
    intro: { label: 'Company', h: '从需求到运维，由同一团队负责。',
      p: ['URBANSOFT 依托多年为公共机构开发和运维业务系统的经验成立。',
          '我们以统一的责任体系完成分析、设计、开发与维护，保障系统的稳定性与运维效率。'] },
    business: { label: 'Business', h: '业务领域',
      items: [
        { t: '业务系统建设', d: '围绕公共机构的业务流程，设计并建设管理系统。' },
        { t: '数据平台', d: '开发用于数据采集、对接与应用的平台。' },
        { t: '系统运维与维护', d: '通过故障响应、功能改进和定期巡检，保障服务持续运行。' },
        { t: '自有服务开发', d: '正在规划面向老年用户的应用。（规划阶段）' }
      ] },
    caps: { label: 'Capabilities', h: '核心能力',
      items: [
        { t: '需求分析与设计', d: '梳理业务需求，转化为系统架构和数据模型。' },
        { t: '开发与建设', d: '以可验证的单元进行开发并测试。' },
        { t: '运维与维护', d: '随运行环境的变化，持续检查并改进系统。' }
      ] },
    tech: { label: 'Technology', h: '技术与方法', p: '以可扩展性和可维护性为标准选择技术。',
      items: ['基于 Java 和 Spring 的业务系统', '关系型数据库设计与 SQL 调优', '对运行中系统进行稳定的改进'], link: '查看技术能力' },
    cta: { h: '需要咨询项目吗？', p: '请简要发送您的需求，我们审阅后会回复您。', btn: '联系我们' }
  },

  company: {
    title: '公司介绍 | URBANSOFT', desc: 'URBANSOFT 的公司概况与发展历程。',
    h1: '公司介绍', lead: '一家基于面向公共机构的软件开发与运维经验的IT企业。',
    overview: { label: 'Overview', h: '概况',
      p: ['URBANSOFT 于2023年8月开始运营。\n我们拥有19年以上为公共机构开发和运维应用软件的经验。\n公司承接业务系统建设、数据平台开发以及运维服务，\n同时也在规划自有服务。'] },
    defs: [['公司名称', 'UrbanSoft'], ['品牌', 'URBANSOFT'], ['成立时间', '2023年8月'], ['业务范围', '应用软件的规划、开发与运维'], ['所在国家', '大韩民国'], ['邮箱', 'admin@urbansoftware.co.kr']],
    history: { label: 'History', h: '发展历程', items: [['2023.08', 'URBANSOFT 成立']] },
    note: '愿景、组织架构和办公地点等信息确认后将陆续补充。'
  },

  business: {
    title: '业务领域 | URBANSOFT', desc: 'URBANSOFT 的业务领域：业务系统建设、数据平台、运维与维护。',
    h1: '业务领域', lead: '覆盖系统从建设到运维的完整生命周期。',
    areas: [
      { t: '业务系统建设', d: '围绕公共机构的业务流程，设计并建设项目管理、档案管理、统计等管理系统。' },
      { t: '数据平台', d: '采集并对接多来源数据，开发可用于分析和服务的平台。' },
      { t: '系统运维与维护', d: '对运行中的服务进行故障响应、功能改进和定期巡检，保障服务的连续性。' },
      { t: '自有服务开发', d: '正在分析老年用户的需求，规划面向老年人的应用。', tag: '规划阶段' }
    ],
    approach: { label: 'Approach', h: '工作方式',
      items: [{ t: '梳理需求', d: '将相关方的需求整理成文档，并就优先级达成一致。' }, { t: '设计与实现', d: '先确定架构和数据模型，再分阶段实现。' }, { t: '验证与交付', d: '共享测试结果，并迁移至运行环境。' }] },
    note: '各业务领域的详细页面将在服务范围确定后补充。'
  },

  technology: {
    title: '技术能力 | URBANSOFT', desc: 'URBANSOFT 的技术能力与开发方式。',
    h1: '技术能力', lead: '根据业务需求选择技术。',
    overview: { label: 'Overview', h: '技术概述', p: ['业务系统往往需要长期运行。我们以可扩展性和可维护性为标准设计系统架构。'] },
    expertise: { label: 'Expertise', h: '技术领域',
      items: [{ t: '应用开发', d: '基于 Java 和 Spring 的 Web 应用' }, { t: '数据库', d: '关系型数据库设计、SQL 编写与性能优化' }, { t: '运维与维护', d: '运行中系统的巡检、故障分析与功能改进' }] },
    dev: { label: 'Development', h: '开发方式',
      items: [{ t: '变更记录管理', d: '所有变更均纳入版本管理并可追溯。' }, { t: '分阶段验证', d: '每个开发单元都经过测试，并共享结果。' }, { t: '文档化', d: '留存设计与运维资料，便于交接。' }] },
    quality: { label: 'Quality & Security', h: '质量与安全', p: '以权限分离、输入校验和最小化收集个人信息为基本原则。', note: '已获得的认证确认后将另行列出。' }
  },

  projects: {
    title: '服务经验 | URBANSOFT', desc: 'URBANSOFT 参与过的项目领域。',
    h1: '服务经验', lead: '我们参与过面向公共机构的项目。',
    items: [
      { t: '业务管理系统建设与运维', client: '公共机构', role: '开发与运维' },
      { t: '数据平台建设', client: '公共机构', role: '开发' },
      { t: '知识信息服务维护', client: '公共机构', role: '运维与维护' }
    ],
    labels: { client: '客户类型', role: '服务范围' },
    note: '依据合同条款，客户名称及详细业绩不对外公开。如需了解详情，请联系我们。'
  },

  contact: {
    title: '联系我们 | URBANSOFT', desc: '欢迎就项目与业务合作联系 URBANSOFT。',
    h1: '联系我们', lead: '欢迎咨询项目与业务合作。',
    info: { label: 'Company', h: '联系方式', defs: [['邮箱', 'admin@urbansoftware.co.kr'], ['所在国家', '大韩民国'], ['回复方式', '按收到咨询的顺序通过邮件回复']] },
    form: {
      label: 'Business Inquiry', h: '咨询表单',
      name: '姓名', company: '公司或机构', email: '邮箱', type: '咨询类型', message: '咨询内容',
      types: [['', '请选择'], ['project', '项目开发'], ['maintenance', '运维与维护'], ['partner', '业务合作'], ['etc', '其他']],
      agree: '我同意为处理本次咨询而收集和使用个人信息（姓名、公司、邮箱）。所收集的信息不会用于咨询回复以外的用途。',
      submit: '发送咨询', required: '此项为必填。', emailErr: '请输入有效的邮箱地址。', short: '请至少输入10个字符。', agreeErr: '需要您的同意。',
      sent: '已打开邮件应用，请确认内容后发送。'
    }
  },

  footer: { desc: '软件开发与运维 IT 企业', rights: '© 2023 URBANSOFT. All rights reserved.' }
};
