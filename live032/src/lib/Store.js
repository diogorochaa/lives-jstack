import { sleep } from "./utils";

export class Store {
  data = {
    name: 'JStack Store',
    website: 'https://store.jstack.com.br',
  };

  async fetchData() {
    await sleep();

    return this.data
  }

  async update({ name, website }) {
    await sleep();

    console.log('Updated data with:', { name, website });

    this.data = {
      name,
      website,
    };

    return this.data;
  }
}

export const store = new Store();
