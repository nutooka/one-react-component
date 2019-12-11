const Constants = {
  applicants: [
    {
      id: 1,
      name: 'leonardo dicaprio',
      approved: 95,
      rejected: 5,
      status: 'unseen',
      hasImg: true
    },
    {
      id: 2,
      name: 'mila kunis',
      approved: 6,
      rejected: 1,
      status: 'unseen',
      hasImg: true
    },
    {
      id: 3,
      name: 'robert de niro',
      approved: 4,
      rejected: 2,
      status: 'seen',
      hasImg: true
    },
    {
      id: 4,
      name: 'julia roberts',
      approved: 2,
      rejected: 3,
      status: 'unseen',
      hasImg: true
    },
    {
      id: 5,
      name: 'daenerys targaryen',
      approved: 1,
      rejected: 3,
      status: 'seen',
      hasImg: true
    },
    {
      id: 6,
      name: 'jack nicholson',
      approved: 0,
      rejected: 4,
      status: 'seen',
      hasImg: true
    },
    {
      id: 7,
      name: 'rick sanchez',
      approved: 0,
      rejected: 0,
      status: 'unseen',
      hasImg: false
    }
  ],
  interval: [
    [100,90],
    [89,70],
    [69,50],
    [49,30],
    [29,10],
    [9,0]
  ]
};

module.exports = Constants;
