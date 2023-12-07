addSubDomain({
  description: 'A domain for my Home Server Dashboard', // describe your project in this field
  domain: 'in-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'pocholo', // desired subdomain name
  owner: {
    repo: 'https://github.com/pocholo30',
    email: 'poxhi30@gmail.com',
  },
  record: {
    //CNAME: '<cname-domain>', // e.g.: <your-github-account>.github.io
    NS: ['ns1.cloudns.net', 'ns2.cloudns.net', 'ns3.cloudns.net', 'ns4.cloudns.net'],
  },
  //proxy: false,
})
