import React from 'react'
import { Helmet } from "react-helmet";
import { BrowserRouter, browserHistory, Route } from 'react-router-dom';

import steem from 'steem'

import { Container } from 'semantic-ui-react'

import Account from '../containers/account'
import IndexLayout from '../components/layouts/index'
import FeedLayout from '../components/layouts/feed'
import ForumLayout from '../components/layouts/forum'
import ForumCreateLayout from '../components/layouts/forum/create'
import ForumsLayout from '../components/layouts/forums'
import RepliesLayout from '../components/layouts/replies'
import Thread from '../containers/thread'
import TopicLayout from '../components/layouts/topic'

import BreadcrumbMenu from '../components/global/breadcrumb'
import FooterMenu from '../components/global/footer'
import HeaderMenu from '../components/global/menu'
import GlobalNotice from '../components/global/notice'

import './app.css'
import '../../node_modules/noty/lib/noty.css'

steem.config.set('websocket', 'wss://rpc.buildteam.io')

const App = () => (
    <BrowserRouter history={browserHistory}>
      <div className="AppContainer">
        <Helmet>
            <meta charSet="utf-8" />
            <title>chainBB</title>
        </Helmet>
        <HeaderMenu />
        <BreadcrumbMenu />
        <GlobalNotice />
        <Container>
          <Route exact path="/" component={IndexLayout} />
          <Route path="/@:username" component={Account} />
          <Route path="/create/forum" component={ForumCreateLayout} />
          <Route path="/feed" component={FeedLayout} />
          <Route path="/forums" component={ForumsLayout} />
          <Route path="/forums/:group" component={IndexLayout} />
          <Route path="/f/:id/:section?" component={ForumLayout} />
          <Route path="/forum/:id" render={(props) => <Redirect to={`/f/${props.match.params.id}`}/>}/>
          <Route path="/replies" component={RepliesLayout} />
          <Route path="/topic/:category" component={TopicLayout} />
          <Route path="/:category/@:author/:permlink" component={Thread} />
        </Container>
        <BreadcrumbMenu />
        <FooterMenu />
      </div>
    </BrowserRouter>
)

export default App
