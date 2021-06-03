import { Vue, Component, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'


@Component({
  name: 'Hello',
})
export default class extends Vue {
  // 配置JSX中属性类型检查
  $props!: {
    text: String
  }

  @Prop(String) text!: String

  render(h: CreateElement) {
    return <div> Hello {this.text} </div>
  }
}
