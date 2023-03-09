# NX Angular Module Federation with Docker 
## How to start app?
Inside `modulefederation` folder
```bash
npm i
```

```bash
npx nx serve shell --devRemotes="first-microfront, second-microfront"
``` 
possible without *devRemotes* but it won't rerender when you change something on some microfront(not *shell*)

## Module Federation Setup
- Check official [NX documentation](https://nx.dev/recipes/module-federation/dynamic-module-federation-with-angular#advanced-angular-micro-frontends-with-dynamic-module-federation)
- In folder `Documentation` you can see how to setup project and how to install *Angular Materials*
- Install [NX console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) for generating components, libraries, modules...

You can follow documentation for generating microfronts, modules, and components, or personally its easier to do all that by using NX console.

Host->(Remotes)->Modules->Components

1. Generating host using NX console - set name(*shell*), check dynamic checkbox and set style(css, scss...). 

```bash
npx nx generate @nrwl/angular:host shell --dynamic --style=scss --no-interactive --dry-run
```

2. Generating remotes using NX console - set name, host(*shell*) and style. 

```bash
npx nx generate @nrwl/angular:remote first-microfront --host=shell --style=scss --no-interactive --dry-run
```

3. Line for generating Module in which will be components in shell/microfront:

```bash
npx nx generate @schematics/angular:module newModule --project=shell --routing --no-interactive --dry-run
```
 or do it using nx console(check routing checkbox).

4. Line for generating Component: 

```bash
npx nx generate @nrwl/angular:component newComponentt --project=shell --no-interactive --dry-run 
```
 After that add component inside `declarations` inside it's module.


For displaying component inside Microfront its necessary to set path to module inside `entry.routes.ts`, and add route to component inside `component-routing.module.ts`

For libraries its necessary to add new exports in `"index.ts"` for each new class you want to be accessable from outside of library(services, models).

[Presentation about NX Module Federation](https://slides.com/mitarbrankovic/modulefederation)

## Dynamic Module Federation - how it works?

Example of displaying remote inside it's host.
![Shell](/readme-images/shell.png)
![Micrfront1](/readne-images/microfront1.png)

## Dockerization of Module Federation