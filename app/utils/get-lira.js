import config from 'euprostir/config/environment';

export default function getLira(key) {
  let site = config.neuronet.site;
  if (!site) return null;
  let value = config.neuronet[key] || null;
  if (!value) return site;
  return `${site},${value}`;
}
