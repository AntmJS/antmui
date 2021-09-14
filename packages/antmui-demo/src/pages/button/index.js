import React from 'react'
import { Button } from '../../../../antmui/src/index'
import '../../../../antmui/src/style/components/button.less'

export default function demo() {
  return (
    <>
      <div className="example-show">
        <div className="example-show-title">按钮类型</div>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="default">默认按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
      </div>

      <div className="example-show">
        <div className="example-show-title">朴素按钮</div>
        <Button plain type="primary">
          主要按钮
        </Button>
        <Button plain type="warning">
          警告按钮
        </Button>
      </div>

      <div className="example-show">
        <div className="example-show-title">细边框</div>
        <Button plain hairline type="primary">
          主要按钮
        </Button>
        <Button plain hairline type="warning">
          警告按钮
        </Button>
      </div>

      <div className="example-show">
        <div className="example-show-title">禁用状态</div>
        <Button disabled type="primary">
          禁用状态
        </Button>
        <Button disabled type="success">
          禁用状态
        </Button>
      </div>

      <div className="example-show">
        <div className="example-show-title">加载状态</div>
        <Button loading type="primary" />
        <Button loading type="primary" loading-type="spinner" />
        <Button loading type="primary" loading-text="加载中..." />
      </div>

      <div className="example-show">
        <div className="example-show-title">按钮形状</div>
        <Button square type="primary">
          方形按钮
        </Button>
        <Button round type="primary">
          圆形按钮
        </Button>
      </div>

      <div className="example-show">
        <div className="example-show-title">图标按钮</div>
        <Button icon="plus" type="primary" />
        <Button icon="plus" type="primary">
          按钮
        </Button>
        <Button icon="https://img.yzcdn.cn/vant/user-active.png" type="primary">
          按钮
        </Button>
      </div>

      <div className="example-show">
        <div className="example-show-title">按钮尺寸</div>
        <Button type="primary" size="large">
          大号按钮
        </Button>
        <Button type="primary" size="normal">
          普通按钮
        </Button>
        <Button type="primary" size="small">
          小型按钮
        </Button>
        <Button type="primary" size="mini">
          迷你按钮
        </Button>
      </div>

      <div className="example-show">
        <div className="example-show-title">块级元素</div>
        <Button type="primary" block>
          块级元素
        </Button>
      </div>

      <div className="example-show">
        <div className="example-show-title">页面导航</div>
        <Button type="primary" url="/vant/mobile.html">
          URL 跳转
        </Button>
        <Button type="primary" to="index">
          路由跳转
        </Button>
      </div>

      <div className="example-show">
        <div className="example-show-title">自定义颜色</div>
        <Button color="#7232dd">单色按钮</Button>
        <Button color="#7232dd" plain>
          单色按钮
        </Button>
        <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
          渐变色按钮
        </Button>
      </div>
    </>
  )
}
