import { HelloTypeScript } from "./HelloTypeScript";

it('The new instance must be of the correct type', () => {
  expect(new HelloTypeScript).toBeInstanceOf(HelloTypeScript)
})
