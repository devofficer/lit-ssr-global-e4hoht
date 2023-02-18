import { LitElement, html, css } from 'lit';

export class SimpleGreeter extends LitElement {
  static styles = css`
    div {
      border: 1px solid black;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    span {
      color: rebeccapurple;
    }

    p {
      font-family: sans-serif;
    }
  `;

  static properties = {
    name: {},
    data: [],
    count: { type: Number },
  };

  constructor() {
    super();
    this.name = 'Somebody';
    this.data = [];
    this.count = 0;
    this.items = [];
  }

  render() {
    return html`
      <div>
        <h1>Hello, <span>${this.name}</span>!</h1>
        <p>Count: ${this.count}</p>
        <button @click=${() => this.count++}>++</button>
        ${this.data.map((item) => {
          return html`<span>${item}3</span>`;
        })}
      </div>
    `;
  }
}

customElements.define('simple-greeter', SimpleGreeter);
