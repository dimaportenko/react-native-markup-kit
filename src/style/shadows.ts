import { ViewStyle } from 'react-native';
import _ from 'lodash';
import { ShadowsPresets } from './shadowsPresets';


export class Shadows {
  keysPattern: RegExp = this.generateKeysPattern();

  loadShadows(shadows: Dictionary<any>) {
    _.forEach(shadows, (value, key) => {
      //@ts-ignore
      this[key] = value;
    });
    this.keysPattern = this.generateKeysPattern();
  }

  getKeysPattern() {
    return this.keysPattern;
  }

  generateKeysPattern() {
    return new RegExp(_.chain(this)
      .keys()
      .map(key => [`${key}`])
      .flatten()
      .join('|')
      .value());
  }
}
type CustomShadowsPresets = {[custom: string]: ViewStyle};
const TypedShadows = Shadows as ExtendTypeWith<ExtendTypeWith<typeof Shadows, typeof ShadowsPresets>, CustomShadowsPresets>;
const shadows = new TypedShadows();
shadows.loadShadows(ShadowsPresets);

export default shadows;
