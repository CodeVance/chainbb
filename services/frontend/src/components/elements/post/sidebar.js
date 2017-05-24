import React from 'react';

import { Divider, Dropdown, Header, Icon, Menu, Segment } from 'semantic-ui-react'
import UserLink from '../../../utils/link/user'
import TimeAgo from 'react-timeago'

export default class PostSidebar extends React.Component {
  render() {
    let display = null,
        post = this.props.post.content
    if(!this.props.op || (this.props.op && this.props.page === 1)) {
      display = (
        <div>
          <Divider horizontal style={{margin: '0.5em 0 1em'}}>Original Poster</Divider>
          <Segment basic className="thread-author center aligned">
            <img alt='' src={`https://img.steemconnect.com/@${post.author}?size=150`} className="ui centered spaced rounded bordered image" />
            <Header size='large'>
              <UserLink username={post.author} />
            </Header>
          </Segment>
          <Divider horizontal>Post Info</Divider>
          <Menu color='blue' inverted fluid vertical>
            <Dropdown color='blue' text='View this post on...' size='small' pointing='left' className='link item'>
              <Dropdown.Menu>
                <a href={`https://steemit.com${post.url}`} target='_blank' className='item'>
                  <Icon name='external' />
                  steemit.com
                </a>
                <a href={`https://busy.org${post.url}`} target='_blank' className='item'>
                  <Icon name='external' />
                  busy.org
                </a>
                <a href={`https://steemdb.com${post.url}`} target='_blank' className='item'>
                  <Icon name='external' />
                  steemdb.com
                </a>
                <a href={`https://phist.steemdata.com/history?identifier=steemit.com${post.url}`} target='_blank' className='item'>
                  <Icon name='external' />
                  phist.steemdata.com
                </a>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </div>
      )
    } else {
      display = (
        <div>
          <Segment clearing basic className="thread-author">
            <Header>
              <img alt={post.author} src={`https://img.steemconnect.com/@${post.author}?size=50`} className="ui left floated rounded bordered image" style={{minHeight: '50px', minWidth: '50px'}}/>
              <Header.Subheader>
                thread started by:
              </Header.Subheader>
              <UserLink username={post.author} />
              <Header.Subheader>
                <TimeAgo date={`${post.created}Z`} />
              </Header.Subheader>
            </Header>
          </Segment>
        </div>
      )
    }
    return display
  }
}
