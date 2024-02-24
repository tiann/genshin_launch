import kernelsu from 'kernelsu';

const { stdout } = await kernelsu.exec("id");
console.log(`stdout: ${stdout}`);
