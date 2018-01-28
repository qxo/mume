// modified according to the prism website 
// http://prismjs.com/#languages-list
const scopesForLanguageName = {
  'sh': 'bash',
  'bash': 'bash',
  'c': 'c',
  'c++': 'cpp',
  'cpp': 'cpp',
  'coffee': 'coffeescript',
  'coffeescript': 'coffeescript',
  'coffee-script': 'coffeescript',
  'cs': 'csharp',
  'csharp': 'csharp',
  'css': 'css',
  'scss': 'scss',
  'sass': 'sass',
  'elm': 'elm',
  'elmlang': 'elm',
  'elm-lang': 'elm',
  'erlang': 'erlang',
  'go': 'go',
  'html': 'html',
  'java': 'java',
  'js': 'javascript',
  'javascript': 'javascript',
  'json': 'json',
  'less': 'less',
  'objc': 'objectivec',
  'objectivec': 'objectivec',
  'objective-c': 'objectivec',
  'php': 'php',
  'py': 'python',
  'python': 'python',
  'rb': 'ruby',
  'ruby': 'ruby',
  'text': 'text',
  'tex': 'latex',
  'xml': 'xml',
  'yaml': 'yaml',
  'yml': 'yaml',
  // extended
  'yaml_table': 'yaml',
  'mermaid': 'mermaid',
  'plantuml': 'plantuml',
  'puml': 'plantuml',
  'wavedrom': 'wavedrom',
  'viz': 'dot',
  'dot': 'dot',
  'erd': 'erd',
  'node': 'javascript',
  'md': 'gfm',
  'diff': 'diff'
}

export function scopeForLanguageName(language) {
  language = language.toLowerCase()
  return scopesForLanguageName[language] || language
}