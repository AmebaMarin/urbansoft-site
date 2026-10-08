// English content. [DRAFT] marks placeholder copy pending confirmation.
export default {
  slug: 'en', htmlLang: 'en', og: 'en_US', langName: 'English',
  site: { name: 'UrbanSoft', brand: 'URBANSOFT', desc: 'An IT company that plans, builds and maintains software systems, drawing on experience in the public sector.' },
  ui: { skip: 'Skip to content', menu: 'Menu', contact: 'Contact', more: 'Learn more', home: 'UrbanSoft home', lang: 'Language', draftNote: 'Note' },
  nav: { company: 'Company', business: 'Business', technology: 'Technology', projects: 'Experience', contact: 'Contact' },

  home: {
    title: 'UrbanSoft | Software Development and Operations',
    desc: 'UrbanSoft plans, builds and maintains software systems, drawing on experience developing and operating applications for public institutions.',
    hero: { // [DRAFT] placeholder tagline
      eyebrow: 'IT SERVICES',
      h1: 'Connecting Technology with Business Value.',
      lead: 'We start from business requirements, design the system, and stay responsible for operations after delivery.',
      primary: 'Start a project', secondary: 'View business areas'
    },
    facts: [['Founded', 'August 2023'], ['Development and operations', '19+ years (founder)'], ['Primary clients', 'Public institutions']],
    intro: { label: 'Company', h: 'One team, from requirements to operations.',
      p: ['UrbanSoft was founded on years of experience developing and operating business systems for public institutions.',
          'We handle analysis, design, development and maintenance under a single line of responsibility, which keeps systems stable and efficient to run.'] },
    business: { label: 'Business', h: 'Business areas',
      items: [
        { t: 'Business systems', d: 'We design and build management systems around the workflows of public institutions.' },
        { t: 'Data platforms', d: 'We develop platforms that collect, integrate and make use of data.' },
        { t: 'Operations and maintenance', d: 'Incident response, enhancements and regular checks keep services running.' },
        { t: 'In-house services', d: 'We are planning an app for senior users. (Planning stage)' }
      ] },
    caps: { label: 'Capabilities', h: 'Core capabilities',
      items: [
        { t: 'Requirements and design', d: 'We turn business requirements into system structure and data models.' },
        { t: 'Development', d: 'We build in verifiable units and test each one.' },
        { t: 'Operations and maintenance', d: 'We review and improve systems as the operating environment changes.' }
      ] },
    tech: { label: 'Technology', h: 'Technology and approach', p: 'We choose technology for scalability and maintainability.',
      items: ['Business systems built on Java and Spring', 'Relational database design and SQL tuning', 'Stable improvement of systems already in operation'], link: 'View technology' },
    cta: { h: 'Planning a project?', p: 'Send us a short description of your requirements. We will review it and reply.', btn: 'Contact us' }
  },

  company: {
    title: 'Company | UrbanSoft', desc: 'Company overview and history of UrbanSoft.',
    h1: 'Company', lead: 'An IT company built on experience developing and operating software for public institutions.',
    overview: { label: 'Overview', h: 'Overview',
      p: ['UrbanSoft started in August 2023.\nWe have developed and operated application software for public institutions for more than 19 years.\nThe company builds business systems and data platforms, provides operations and maintenance,\nand is planning in-house services.'] },
    defs: [['Company name', 'UrbanSoft'], ['Brand', 'URBANSOFT'], ['Founded', 'August 2023'], ['Business', 'Planning, development and operation of application software'], ['Country', 'Republic of Korea'], ['Email', 'admin@urbansoftware.co.kr']],
    history: { label: 'History', h: 'History', items: [['2023.08', 'UrbanSoft founded']] },
    note: 'Vision, organization and location will be added once confirmed.'
  },

  business: {
    title: 'Business | UrbanSoft', desc: 'Business systems, data platforms, and operations and maintenance from UrbanSoft.',
    h1: 'Business', lead: 'We cover the full lifecycle of a system, from build to operation.',
    areas: [
      { t: 'Business systems', d: 'We design and build management systems, such as project management, records and reporting, around the workflows of public institutions.' },
      { t: 'Data platforms', d: 'We develop platforms that collect and integrate data from multiple sources for analysis and services.' },
      { t: 'Operations and maintenance', d: 'We handle incident response, enhancements and regular checks for live services to keep them available.' },
      { t: 'In-house services', d: 'We are analyzing the needs of senior users to plan an app designed for them.', tag: 'Planning stage' }
    ],
    approach: { label: 'Approach', h: 'How we work',
      items: [{ t: 'Define requirements', d: 'We document stakeholder needs and agree on priorities.' }, { t: 'Design and build', d: 'We fix the structure and data model first, then implement in stages.' }, { t: 'Verify and hand over', d: 'We share test results and migrate to the operating environment.' }] },
    note: 'Detail pages for each business area will be added once the scope of services is confirmed.'
  },

  technology: {
    title: 'Technology | UrbanSoft', desc: 'Technical expertise and development approach at UrbanSoft.',
    h1: 'Technology', lead: 'We choose technology to fit business requirements.',
    overview: { label: 'Overview', h: 'Overview', p: ['Business systems stay in service for years. We design structure for scalability and maintainability.'] },
    expertise: { label: 'Expertise', h: 'Technical expertise',
      items: [{ t: 'Application development', d: 'Web applications built on Java and Spring' }, { t: 'Databases', d: 'Relational database design, SQL development and performance tuning' }, { t: 'Operations', d: 'Review, incident analysis and enhancement of live systems' }] },
    dev: { label: 'Development', h: 'Development approach',
      items: [{ t: 'Change tracking', d: 'Every change is tracked under version control.' }, { t: 'Staged verification', d: 'We test each unit of work and share the results.' }, { t: 'Documentation', d: 'Design and operating information is documented to ease handover.' }] },
    quality: { label: 'Quality & Security', h: 'Quality and security', p: 'Our baseline is separated access rights, input validation and minimal collection of personal data.', note: 'Certifications will be listed separately once confirmed.' }
  },

  projects: {
    title: 'Experience | UrbanSoft', desc: 'Project areas UrbanSoft has worked in.',
    h1: 'Experience', lead: 'We have worked on projects for public institutions.',
    items: [
      { t: 'Business management systems: build and operation', client: 'Public institution', role: 'Development and operations' },
      { t: 'Data platform development', client: 'Public institution', role: 'Development' },
      { t: 'Knowledge information service maintenance', client: 'Public institution', role: 'Operations and maintenance' }
    ],
    labels: { client: 'Client type', role: 'Scope' },
    note: 'Client names and detailed results are not disclosed, in line with contract terms. Details are available on request.'
  },

  contact: {
    title: 'Contact | UrbanSoft', desc: 'Contact UrbanSoft about projects and business partnerships.',
    h1: 'Contact', lead: 'We accept inquiries about projects and partnerships.',
    info: { label: 'Company', h: 'Contact details', defs: [['Email', 'admin@urbansoftware.co.kr'], ['Country', 'Republic of Korea'], ['Response', 'We reply by email in the order inquiries are received']] },
    form: {
      label: 'Business Inquiry', h: 'Inquiry form',
      name: 'Name', company: 'Company or institution', email: 'Email', type: 'Inquiry type', message: 'Message',
      types: [['', 'Select'], ['project', 'Project development'], ['maintenance', 'Operations and maintenance'], ['partner', 'Partnership'], ['etc', 'Other']],
      agree: 'I agree to the collection and use of my personal data (name, company, email) to handle this inquiry. It will not be used for any other purpose.',
      submit: 'Send inquiry', required: 'This field is required.', emailErr: 'Enter a valid email address.', short: 'Enter at least 10 characters.', agreeErr: 'Your consent is required.',
      sent: 'Your email app has opened. Please review the message and send it.'
    }
  },

  footer: { desc: 'IT company for software development and operations', rights: '© 2023 URBANSOFT. All rights reserved.' }
};
