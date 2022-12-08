<img src="https://angular.io/assets/images/logos/angular/shield-large.svg" align="left" height="60"/>

# test-schematics

:hammer: Test Schematics (generate a simple Angular component)

## Install

```bash
npm install --no-save @angular-devkit/schematics-cli
```

## Build

```bash
# Compile *.ts files
npm run build

# Launch Schematics
npx schematics .:test-schematics --dry-run=false
```

### Unit Testing

```bash
npm run test
```

### Development

```bash
# Start listening to compile *.ts files
npm run watch

# Launch Schematics
schematics .:test-schematics --dry-run=false
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2019
