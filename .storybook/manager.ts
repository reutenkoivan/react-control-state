import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'
import packageJson from '../package.json' assert { type: 'json' }

const theme = create({
	base: 'light',
	brandTitle: packageJson.name,
  // TODO: use the PUBLIC_URL env variable
	brandImage: process.env.NODE_ENV === 'production' ? '/react-control-flow/banner.png' : '/banner.png',
})

addons.setConfig({ theme })
