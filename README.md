# yavugen
### YetAnotherVueGenerator
#### A CLI tool to generate Vue components.


#### - Usage: yavugen \<Path> \<Flag>

##### You can run -> npx yavugen \<Path> \<Flag>

It requires the project name as the first argument and accepts subsequent flags.

Valid flags are:
* **-h**: Print the help message.
* **-t**: The component is TypeScript-based.
* **-f**: Create a flat component (.vue file only). Otherwise a folder with a .vue and a stylesheet is created.
* **-s**: If the component is NOT flat, set the .scss stylesheet format".

The project is configured in order to be compiled with webpack (*./dist/yavugen.js*).
  
<sub>
  If you clone the repository run "npm i" to install dependencies.
</sub>
