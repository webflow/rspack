// Source hashes include a usize length prefix, so WASM32 produces different class names.
export default () => !process.env.WASM;
