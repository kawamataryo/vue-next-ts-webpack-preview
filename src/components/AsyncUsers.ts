import { h, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const fetchUsers = () => {
      return new Promise<string[]>(resolve => {
          setTimeout(()=> {
            resolve(['Jon', 'Bob', 'Nancy'])
          }, 2000)
      })
    };

    return new Promise(async (resolve) => {
      const content = await fetchUsers();
      resolve(() => h('ul', content.map(n => {
        return h('li', n)
      })))
    })
  }
});
