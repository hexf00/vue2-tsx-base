import { Vue, Component } from 'vue-property-decorator'
import { CreateElement } from 'vue'

@Component
export default class Test extends Vue {

  render(h: CreateElement) {
    return <div>
      Test
    </div>
  }
}
