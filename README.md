# react-native-loading
react-native-loading
#### 使用

```js
import Loading  from 'react-native-loading'

class YourComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loadingShow: false
    }
  }
  componentWillMount() {
    // show loading
    this.setState({
      loadingShow: true,
    })
  }
   componentDidMount() {
    // hide loading
    setTimeout(() => {
      this.setState({
        loadingShow: false,
      })
    }, 2000)
  }
  ...
  render() {
    return (
      <View>
        ... 
        <Loading
          loadingShow={this.state.loadingShow}
        />  
      </View>
    )  
  }
  ```
  
  #### 效果
  
 ![demo.gif](demo.gif) 
  
  #### 支持的属性
  
- loadingShow (true or false) - isRequired.
- size - loading 效果的尺寸.
- color (Number) - loading 效果的颜色.
- overlayWidth (Number) - 整个 loading 遮罩层的宽度
- overlayHeight (Number) - 整个 loading 遮罩层的高度
- overlayColor (String) - 整个 loading 的背景颜色
- text (String) - loading 的文字说明
- textColor (String) - loading 的文字颜色
- textFontSize (Number) - loading 的文字大小