import React from 'react'
import routes from '../../routes'
import MenuInfo from '../../menu'
import { Route, Switch, HashRouter, Redirect, Link } from 'react-router-dom'
import classNames from 'classnames'
import './index.less'

const preCls = 'antmui-site-pageLayout'

export default function PageLayout(): JSX.Element {
  const [hash, setHash] = React.useState(window.location.hash)

  React.useEffect(() => {
    window.addEventListener('hashchange', function () {
      setHash(window.location.hash)
    })
  }, [])

  return (
    <HashRouter>
      <div className={`${preCls}-container`}>
        <iframe
          className={`${preCls}-example`}
          src={`http://localhost:3333/pages/${hash.replace('#/', '')}/index`}
        />
        <div className={`${preCls}-header`}>
          <img className={`${preCls}-logo`} src="" />
        </div>
        <div className={`${preCls}-body`}>
          <div className={`${preCls}-menu`}>
            {(MenuInfo || []).map((it: any, index: number) => (
              <div className={`${preCls}-menu-class`} key={`${index}menuClass`}>
                <div className={`${preCls}-menu-class-title`}>{it.desc}</div>
                {Object.keys(it.items).map((key: any, ind: number) => (
                  <Link
                    key={`${ind}menuItem`}
                    className={classNames({
                      [`${preCls}-menu-item`]: true,
                      [`${preCls}-menu-item-active`]: hash.includes(`${key}`),
                    })}
                    to={`/${key}`}
                  >
                    {it.items[key]}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className={`${preCls}-main`}>
            <Switch>
              <Redirect path="/" exact to="/button" />
              {routes.map((item: any, index: any) => (
                <Route
                  exact
                  path={`/${item.path}`}
                  key={`${item.path}${index}`}
                  component={(props: any) => <item.component {...props} />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  )
}
