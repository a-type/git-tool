import links from './links';

describe('links reducer', () => {
  test('assigns relationships from log', () => {
    const action = {
      type: 'GIT_LOG/GET/DONE',
      payload: {
        log: {
          all: [
            {
              hash: 'd3ec5ccb5aa8cc72cbe9be52aff29fefefed3f7e',
              date: '2017-12-02 16:12:44 -0500',
              message: 'Example 1 (HEAD -> master)',
              author_name: 'Grant Forrest',
              author_email: 'a-type@outlook.com'
            },
            {
              hash: '17fafcbb84606c9a7fa5ce6549299ca55ea075a5',
              date: '2017-12-02 16:11:58 -0500',
              message: 'Example 2',
              author_name: 'Grant Forrest',
              author_email: 'a-type@outlook.com'
            },
            {
              hash: 'e3c478499511fdba61b0bac21cfecb268f1fd761',
              date: '2017-12-02 16:08:51 -0500',
              message: 'Example 3',
              author_name: 'Grant Forrest',
              author_email: 'a-type@outlook.com'
            },
          ],
          latest: {
            hash: 'd3ec5ccb5aa8cc72cbe9be52aff29fefefed3f7e',
            date: '2017-12-02 16:12:44 -0500',
            message: 'Example 1 (HEAD -> master)',
            author_name: 'Grant Forrest',
            author_email: 'a-type@outlook.com'
          },
          total: 3
        }
      },
      meta: {
        repoId: 'default'
      }
    };

    const existingState = {
      children: {
        '17fafcbb84606c9a7fa5ce6549299ca55ea075a5': ['someotherhash'],
      },
      parents: {
        someotherhash: ['17fafcbb84606c9a7fa5ce6549299ca55ea075a5'],
      },
    };

    expect(links(existingState, action)).toEqual({
      children: {
        '17fafcbb84606c9a7fa5ce6549299ca55ea075a5': ['someotherhash', 'd3ec5ccb5aa8cc72cbe9be52aff29fefefed3f7e'],
        'e3c478499511fdba61b0bac21cfecb268f1fd761': ['17fafcbb84606c9a7fa5ce6549299ca55ea075a5'],
      },
      parents: {
        someotherhash: ['17fafcbb84606c9a7fa5ce6549299ca55ea075a5'],
        'd3ec5ccb5aa8cc72cbe9be52aff29fefefed3f7e': ['17fafcbb84606c9a7fa5ce6549299ca55ea075a5'],
        '17fafcbb84606c9a7fa5ce6549299ca55ea075a5': ['e3c478499511fdba61b0bac21cfecb268f1fd761'],
      },
    });
  });
});
