addSubDomain({
  description: 'A domain for my Home Server Dashboard',
  domain: 'in-an.app',
  subdomain: 'pocholo',
  owner: {
    repo: 'https://github.com/pocholo30',
    email: 'poxhi30@gmail.com',
  },
  record: {
    NS: ['ns1.cloudns.net', 'ns2.cloudns.net', 'ns3.cloudns.net', 'ns4.cloudns.net'],
  },
  proxy: false,
})
