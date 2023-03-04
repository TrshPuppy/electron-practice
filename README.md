# Practice Electron App

This repo is for me to practice making an app using [Electron](https://www.electronjs.org/). ~~The tutorial I will follow can be found [here](https://www.youtube.com/watch?v=3yqDxhR2XxE&ab_channel=Fireship).~~

To ensure best practice w/ security in mind, the tutorial I will base this repo on can be found in [here](https://www.electronjs.org/docs/latest/tutorial/quick-start)

Enjoy!

## Lessons Learned:

### Node Integrations Security risk

See [here](https://stackoverflow.com/questions/44391448/electron-require-is-not-defined):

Basic Problem: node `require()` should not be used outside the main process because it gives a user access to node from a render process, which in turn gives them access to the system.

Solution: renderer processes should not have direct access to node (via `require()`). Instead, renderer processes should request that main use `require()` whenever necessary.
