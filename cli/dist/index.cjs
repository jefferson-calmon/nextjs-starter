#! /usr/bin/env node
var Re=Object.create;var Q=Object.defineProperty;var De=Object.getOwnPropertyDescriptor;var Me=Object.getOwnPropertyNames;var Be=Object.getPrototypeOf,Ue=Object.prototype.hasOwnProperty;var E=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var We=(o,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Me(e))!Ue.call(o,n)&&n!==t&&Q(o,n,{get:()=>e[n],enumerable:!(i=De(e,n))||i.enumerable});return o};var C=(o,e,t)=>(t=o!=null?Re(Be(o)):{},We(e||!o||!o.__esModule?Q(t,"default",{value:o,enumerable:!0}):t,o));var $=E(N=>{var F=class extends Error{constructor(e,t,i){super(i),Error.captureStackTrace(this,this.constructor),this.name=this.constructor.name,this.code=t,this.exitCode=e,this.nestedError=void 0}},H=class extends F{constructor(e){super(1,"commander.invalidArgument",e),Error.captureStackTrace(this,this.constructor),this.name=this.constructor.name}};N.CommanderError=F;N.InvalidArgumentError=H});var V=E(j=>{var{InvalidArgumentError:ze}=$(),T=class{constructor(e,t){switch(this.description=t||"",this.variadic=!1,this.parseArg=void 0,this.defaultValue=void 0,this.defaultValueDescription=void 0,this.argChoices=void 0,e[0]){case"<":this.required=!0,this._name=e.slice(1,-1);break;case"[":this.required=!1,this._name=e.slice(1,-1);break;default:this.required=!0,this._name=e;break}this._name.length>3&&this._name.slice(-3)==="..."&&(this.variadic=!0,this._name=this._name.slice(0,-3))}name(){return this._name}_concatValue(e,t){return t===this.defaultValue||!Array.isArray(t)?[e]:t.concat(e)}default(e,t){return this.defaultValue=e,this.defaultValueDescription=t,this}argParser(e){return this.parseArg=e,this}choices(e){return this.argChoices=e.slice(),this.parseArg=(t,i)=>{if(!this.argChoices.includes(t))throw new ze(`Allowed choices are ${this.argChoices.join(", ")}.`);return this.variadic?this._concatValue(t,i):t},this}argRequired(){return this.required=!0,this}argOptional(){return this.required=!1,this}};function Le(o){let e=o.name()+(o.variadic===!0?"...":"");return o.required?"<"+e+">":"["+e+"]"}j.Argument=T;j.humanReadableArgName=Le});var R=E(Z=>{var{humanReadableArgName:Ge}=V(),q=class{constructor(){this.helpWidth=void 0,this.sortSubcommands=!1,this.sortOptions=!1,this.showGlobalOptions=!1}visibleCommands(e){let t=e.commands.filter(n=>!n._hidden),i=e._getHelpCommand();return i&&!i._hidden&&t.push(i),this.sortSubcommands&&t.sort((n,r)=>n.name().localeCompare(r.name())),t}compareOptions(e,t){let i=n=>n.short?n.short.replace(/^-/,""):n.long.replace(/^--/,"");return i(e).localeCompare(i(t))}visibleOptions(e){let t=e.options.filter(n=>!n.hidden),i=e._getHelpOption();if(i&&!i.hidden){let n=i.short&&e._findOption(i.short),r=i.long&&e._findOption(i.long);!n&&!r?t.push(i):i.long&&!r?t.push(e.createOption(i.long,i.description)):i.short&&!n&&t.push(e.createOption(i.short,i.description))}return this.sortOptions&&t.sort(this.compareOptions),t}visibleGlobalOptions(e){if(!this.showGlobalOptions)return[];let t=[];for(let i=e.parent;i;i=i.parent){let n=i.options.filter(r=>!r.hidden);t.push(...n)}return this.sortOptions&&t.sort(this.compareOptions),t}visibleArguments(e){return e._argsDescription&&e.registeredArguments.forEach(t=>{t.description=t.description||e._argsDescription[t.name()]||""}),e.registeredArguments.find(t=>t.description)?e.registeredArguments:[]}subcommandTerm(e){let t=e.registeredArguments.map(i=>Ge(i)).join(" ");return e._name+(e._aliases[0]?"|"+e._aliases[0]:"")+(e.options.length?" [options]":"")+(t?" "+t:"")}optionTerm(e){return e.flags}argumentTerm(e){return e.name()}longestSubcommandTermLength(e,t){return t.visibleCommands(e).reduce((i,n)=>Math.max(i,t.subcommandTerm(n).length),0)}longestOptionTermLength(e,t){return t.visibleOptions(e).reduce((i,n)=>Math.max(i,t.optionTerm(n).length),0)}longestGlobalOptionTermLength(e,t){return t.visibleGlobalOptions(e).reduce((i,n)=>Math.max(i,t.optionTerm(n).length),0)}longestArgumentTermLength(e,t){return t.visibleArguments(e).reduce((i,n)=>Math.max(i,t.argumentTerm(n).length),0)}commandUsage(e){let t=e._name;e._aliases[0]&&(t=t+"|"+e._aliases[0]);let i="";for(let n=e.parent;n;n=n.parent)i=n.name()+" "+i;return i+t+" "+e.usage()}commandDescription(e){return e.description()}subcommandDescription(e){return e.summary()||e.description()}optionDescription(e){let t=[];return e.argChoices&&t.push(`choices: ${e.argChoices.map(i=>JSON.stringify(i)).join(", ")}`),e.defaultValue!==void 0&&(e.required||e.optional||e.isBoolean()&&typeof e.defaultValue=="boolean")&&t.push(`default: ${e.defaultValueDescription||JSON.stringify(e.defaultValue)}`),e.presetArg!==void 0&&e.optional&&t.push(`preset: ${JSON.stringify(e.presetArg)}`),e.envVar!==void 0&&t.push(`env: ${e.envVar}`),t.length>0?`${e.description} (${t.join(", ")})`:e.description}argumentDescription(e){let t=[];if(e.argChoices&&t.push(`choices: ${e.argChoices.map(i=>JSON.stringify(i)).join(", ")}`),e.defaultValue!==void 0&&t.push(`default: ${e.defaultValueDescription||JSON.stringify(e.defaultValue)}`),t.length>0){let i=`(${t.join(", ")})`;return e.description?`${e.description} ${i}`:i}return e.description}formatHelp(e,t){let i=t.padWidth(e,t),n=t.helpWidth||80,r=2,s=2;function c(p,A){if(A){let P=`${p.padEnd(i+s)}${A}`;return t.wrap(P,n-r,i+s)}return p}function a(p){return p.join(`
`).replace(/^/gm," ".repeat(r))}let l=[`Usage: ${t.commandUsage(e)}`,""],u=t.commandDescription(e);u.length>0&&(l=l.concat([t.wrap(u,n,0),""]));let d=t.visibleArguments(e).map(p=>c(t.argumentTerm(p),t.argumentDescription(p)));d.length>0&&(l=l.concat(["Arguments:",a(d),""]));let f=t.visibleOptions(e).map(p=>c(t.optionTerm(p),t.optionDescription(p)));if(f.length>0&&(l=l.concat(["Options:",a(f),""])),this.showGlobalOptions){let p=t.visibleGlobalOptions(e).map(A=>c(t.optionTerm(A),t.optionDescription(A)));p.length>0&&(l=l.concat(["Global Options:",a(p),""]))}let b=t.visibleCommands(e).map(p=>c(t.subcommandTerm(p),t.subcommandDescription(p)));return b.length>0&&(l=l.concat(["Commands:",a(b),""])),l.join(`
`)}padWidth(e,t){return Math.max(t.longestOptionTermLength(e,t),t.longestGlobalOptionTermLength(e,t),t.longestSubcommandTermLength(e,t),t.longestArgumentTermLength(e,t))}wrap(e,t,i,n=40){let r=" \\f\\t\\v\xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF",s=new RegExp(`[\\n][${r}]+`);if(e.match(s))return e;let c=t-i;if(c<n)return e;let a=e.slice(0,i),l=e.slice(i).replace(`\r
`,`
`),u=" ".repeat(i),f="\\s\u200B",b=new RegExp(`
|.{1,${c-1}}([${f}]|$)|[^${f}]+?([${f}]|$)`,"g"),p=l.match(b)||[];return a+p.map((A,P)=>A===`
`?"":(P>0?u:"")+A.trimEnd()).join(`
`)}};Z.Help=q});var U=E(B=>{var{InvalidArgumentError:Xe}=$(),D=class{constructor(e,t){this.flags=e,this.description=t||"",this.required=e.includes("<"),this.optional=e.includes("["),this.variadic=/\w\.\.\.[>\]]$/.test(e),this.mandatory=!1;let i=Je(e);this.short=i.shortFlag,this.long=i.longFlag,this.negate=!1,this.long&&(this.negate=this.long.startsWith("--no-")),this.defaultValue=void 0,this.defaultValueDescription=void 0,this.presetArg=void 0,this.envVar=void 0,this.parseArg=void 0,this.hidden=!1,this.argChoices=void 0,this.conflictsWith=[],this.implied=void 0}default(e,t){return this.defaultValue=e,this.defaultValueDescription=t,this}preset(e){return this.presetArg=e,this}conflicts(e){return this.conflictsWith=this.conflictsWith.concat(e),this}implies(e){let t=e;return typeof e=="string"&&(t={[e]:!0}),this.implied=Object.assign(this.implied||{},t),this}env(e){return this.envVar=e,this}argParser(e){return this.parseArg=e,this}makeOptionMandatory(e=!0){return this.mandatory=!!e,this}hideHelp(e=!0){return this.hidden=!!e,this}_concatValue(e,t){return t===this.defaultValue||!Array.isArray(t)?[e]:t.concat(e)}choices(e){return this.argChoices=e.slice(),this.parseArg=(t,i)=>{if(!this.argChoices.includes(t))throw new Xe(`Allowed choices are ${this.argChoices.join(", ")}.`);return this.variadic?this._concatValue(t,i):t},this}name(){return this.long?this.long.replace(/^--/,""):this.short.replace(/^-/,"")}attributeName(){return Ke(this.name().replace(/^no-/,""))}is(e){return this.short===e||this.long===e}isBoolean(){return!this.required&&!this.optional&&!this.negate}},M=class{constructor(e){this.positiveOptions=new Map,this.negativeOptions=new Map,this.dualOptions=new Set,e.forEach(t=>{t.negate?this.negativeOptions.set(t.attributeName(),t):this.positiveOptions.set(t.attributeName(),t)}),this.negativeOptions.forEach((t,i)=>{this.positiveOptions.has(i)&&this.dualOptions.add(i)})}valueFromOption(e,t){let i=t.attributeName();if(!this.dualOptions.has(i))return!0;let n=this.negativeOptions.get(i).presetArg,r=n!==void 0?n:!1;return t.negate===(r===e)}};function Ke(o){return o.split("-").reduce((e,t)=>e+t[0].toUpperCase()+t.slice(1))}function Je(o){let e,t,i=o.split(/[ |,]+/);return i.length>1&&!/^[[<]/.test(i[1])&&(e=i.shift()),t=i.shift(),!e&&/^-[^-]$/.test(t)&&(e=t,t=void 0),{shortFlag:e,longFlag:t}}B.Option=D;B.DualOptions=M});var te=E(ee=>{function Ye(o,e){if(Math.abs(o.length-e.length)>3)return Math.max(o.length,e.length);let t=[];for(let i=0;i<=o.length;i++)t[i]=[i];for(let i=0;i<=e.length;i++)t[0][i]=i;for(let i=1;i<=e.length;i++)for(let n=1;n<=o.length;n++){let r=1;o[n-1]===e[i-1]?r=0:r=1,t[n][i]=Math.min(t[n-1][i]+1,t[n][i-1]+1,t[n-1][i-1]+r),n>1&&i>1&&o[n-1]===e[i-2]&&o[n-2]===e[i-1]&&(t[n][i]=Math.min(t[n][i],t[n-2][i-2]+1))}return t[o.length][e.length]}function Qe(o,e){if(!e||e.length===0)return"";e=Array.from(new Set(e));let t=o.startsWith("--");t&&(o=o.slice(2),e=e.map(s=>s.slice(2)));let i=[],n=3,r=.4;return e.forEach(s=>{if(s.length<=1)return;let c=Ye(o,s),a=Math.max(o.length,s.length);(a-c)/a>r&&(c<n?(n=c,i=[s]):c===n&&i.push(s))}),i.sort((s,c)=>s.localeCompare(c)),t&&(i=i.map(s=>`--${s}`)),i.length>1?`
(Did you mean one of ${i.join(", ")}?)`:i.length===1?`
(Did you mean ${i[0]}?)`:""}ee.suggestSimilar=Qe});var se=E(oe=>{var Ze=require("events").EventEmitter,W=require("child_process"),v=require("path"),z=require("fs"),h=require("process"),{Argument:et,humanReadableArgName:tt}=V(),{CommanderError:L}=$(),{Help:it}=R(),{Option:ie,DualOptions:nt}=U(),{suggestSimilar:ne}=te(),G=class o extends Ze{constructor(e){super(),this.commands=[],this.options=[],this.parent=null,this._allowUnknownOption=!1,this._allowExcessArguments=!0,this.registeredArguments=[],this._args=this.registeredArguments,this.args=[],this.rawArgs=[],this.processedArgs=[],this._scriptPath=null,this._name=e||"",this._optionValues={},this._optionValueSources={},this._storeOptionsAsProperties=!1,this._actionHandler=null,this._executableHandler=!1,this._executableFile=null,this._executableDir=null,this._defaultCommandName=null,this._exitCallback=null,this._aliases=[],this._combineFlagAndOptionalValue=!0,this._description="",this._summary="",this._argsDescription=void 0,this._enablePositionalOptions=!1,this._passThroughOptions=!1,this._lifeCycleHooks={},this._showHelpAfterError=!1,this._showSuggestionAfterError=!0,this._outputConfiguration={writeOut:t=>h.stdout.write(t),writeErr:t=>h.stderr.write(t),getOutHelpWidth:()=>h.stdout.isTTY?h.stdout.columns:void 0,getErrHelpWidth:()=>h.stderr.isTTY?h.stderr.columns:void 0,outputError:(t,i)=>i(t)},this._hidden=!1,this._helpOption=void 0,this._addImplicitHelpCommand=void 0,this._helpCommand=void 0,this._helpConfiguration={}}copyInheritedSettings(e){return this._outputConfiguration=e._outputConfiguration,this._helpOption=e._helpOption,this._helpCommand=e._helpCommand,this._helpConfiguration=e._helpConfiguration,this._exitCallback=e._exitCallback,this._storeOptionsAsProperties=e._storeOptionsAsProperties,this._combineFlagAndOptionalValue=e._combineFlagAndOptionalValue,this._allowExcessArguments=e._allowExcessArguments,this._enablePositionalOptions=e._enablePositionalOptions,this._showHelpAfterError=e._showHelpAfterError,this._showSuggestionAfterError=e._showSuggestionAfterError,this}_getCommandAndAncestors(){let e=[];for(let t=this;t;t=t.parent)e.push(t);return e}command(e,t,i){let n=t,r=i;typeof n=="object"&&n!==null&&(r=n,n=null),r=r||{};let[,s,c]=e.match(/([^ ]+) *(.*)/),a=this.createCommand(s);return n&&(a.description(n),a._executableHandler=!0),r.isDefault&&(this._defaultCommandName=a._name),a._hidden=!!(r.noHelp||r.hidden),a._executableFile=r.executableFile||null,c&&a.arguments(c),this._registerCommand(a),a.parent=this,a.copyInheritedSettings(this),n?this:a}createCommand(e){return new o(e)}createHelp(){return Object.assign(new it,this.configureHelp())}configureHelp(e){return e===void 0?this._helpConfiguration:(this._helpConfiguration=e,this)}configureOutput(e){return e===void 0?this._outputConfiguration:(Object.assign(this._outputConfiguration,e),this)}showHelpAfterError(e=!0){return typeof e!="string"&&(e=!!e),this._showHelpAfterError=e,this}showSuggestionAfterError(e=!0){return this._showSuggestionAfterError=!!e,this}addCommand(e,t){if(!e._name)throw new Error(`Command passed to .addCommand() must have a name
- specify the name in Command constructor or using .name()`);return t=t||{},t.isDefault&&(this._defaultCommandName=e._name),(t.noHelp||t.hidden)&&(e._hidden=!0),this._registerCommand(e),e.parent=this,e._checkForBrokenPassThrough(),this}createArgument(e,t){return new et(e,t)}argument(e,t,i,n){let r=this.createArgument(e,t);return typeof i=="function"?r.default(n).argParser(i):r.default(i),this.addArgument(r),this}arguments(e){return e.trim().split(/ +/).forEach(t=>{this.argument(t)}),this}addArgument(e){let t=this.registeredArguments.slice(-1)[0];if(t&&t.variadic)throw new Error(`only the last argument can be variadic '${t.name()}'`);if(e.required&&e.defaultValue!==void 0&&e.parseArg===void 0)throw new Error(`a default value for a required argument is never used: '${e.name()}'`);return this.registeredArguments.push(e),this}helpCommand(e,t){if(typeof e=="boolean")return this._addImplicitHelpCommand=e,this;e=e??"help [command]";let[,i,n]=e.match(/([^ ]+) *(.*)/),r=t??"display help for command",s=this.createCommand(i);return s.helpOption(!1),n&&s.arguments(n),r&&s.description(r),this._addImplicitHelpCommand=!0,this._helpCommand=s,this}addHelpCommand(e,t){return typeof e!="object"?(this.helpCommand(e,t),this):(this._addImplicitHelpCommand=!0,this._helpCommand=e,this)}_getHelpCommand(){return this._addImplicitHelpCommand??(this.commands.length&&!this._actionHandler&&!this._findCommand("help"))?(this._helpCommand===void 0&&this.helpCommand(void 0,void 0),this._helpCommand):null}hook(e,t){let i=["preSubcommand","preAction","postAction"];if(!i.includes(e))throw new Error(`Unexpected value for event passed to hook : '${e}'.
Expecting one of '${i.join("', '")}'`);return this._lifeCycleHooks[e]?this._lifeCycleHooks[e].push(t):this._lifeCycleHooks[e]=[t],this}exitOverride(e){return e?this._exitCallback=e:this._exitCallback=t=>{if(t.code!=="commander.executeSubCommandAsync")throw t},this}_exit(e,t,i){this._exitCallback&&this._exitCallback(new L(e,t,i)),h.exit(e)}action(e){let t=i=>{let n=this.registeredArguments.length,r=i.slice(0,n);return this._storeOptionsAsProperties?r[n]=this:r[n]=this.opts(),r.push(this),e.apply(this,r)};return this._actionHandler=t,this}createOption(e,t){return new ie(e,t)}_callParseArg(e,t,i,n){try{return e.parseArg(t,i)}catch(r){if(r.code==="commander.invalidArgument"){let s=`${n} ${r.message}`;this.error(s,{exitCode:r.exitCode,code:r.code})}throw r}}_registerOption(e){let t=e.short&&this._findOption(e.short)||e.long&&this._findOption(e.long);if(t){let i=e.long&&this._findOption(e.long)?e.long:e.short;throw new Error(`Cannot add option '${e.flags}'${this._name&&` to command '${this._name}'`} due to conflicting flag '${i}'
-  already used by option '${t.flags}'`)}this.options.push(e)}_registerCommand(e){let t=n=>[n.name()].concat(n.aliases()),i=t(e).find(n=>this._findCommand(n));if(i){let n=t(this._findCommand(i)).join("|"),r=t(e).join("|");throw new Error(`cannot add command '${r}' as already have command '${n}'`)}this.commands.push(e)}addOption(e){this._registerOption(e);let t=e.name(),i=e.attributeName();if(e.negate){let r=e.long.replace(/^--no-/,"--");this._findOption(r)||this.setOptionValueWithSource(i,e.defaultValue===void 0?!0:e.defaultValue,"default")}else e.defaultValue!==void 0&&this.setOptionValueWithSource(i,e.defaultValue,"default");let n=(r,s,c)=>{r==null&&e.presetArg!==void 0&&(r=e.presetArg);let a=this.getOptionValue(i);r!==null&&e.parseArg?r=this._callParseArg(e,r,a,s):r!==null&&e.variadic&&(r=e._concatValue(r,a)),r==null&&(e.negate?r=!1:e.isBoolean()||e.optional?r=!0:r=""),this.setOptionValueWithSource(i,r,c)};return this.on("option:"+t,r=>{let s=`error: option '${e.flags}' argument '${r}' is invalid.`;n(r,s,"cli")}),e.envVar&&this.on("optionEnv:"+t,r=>{let s=`error: option '${e.flags}' value '${r}' from env '${e.envVar}' is invalid.`;n(r,s,"env")}),this}_optionEx(e,t,i,n,r){if(typeof t=="object"&&t instanceof ie)throw new Error("To add an Option object use addOption() instead of option() or requiredOption()");let s=this.createOption(t,i);if(s.makeOptionMandatory(!!e.mandatory),typeof n=="function")s.default(r).argParser(n);else if(n instanceof RegExp){let c=n;n=(a,l)=>{let u=c.exec(a);return u?u[0]:l},s.default(r).argParser(n)}else s.default(n);return this.addOption(s)}option(e,t,i,n){return this._optionEx({},e,t,i,n)}requiredOption(e,t,i,n){return this._optionEx({mandatory:!0},e,t,i,n)}combineFlagAndOptionalValue(e=!0){return this._combineFlagAndOptionalValue=!!e,this}allowUnknownOption(e=!0){return this._allowUnknownOption=!!e,this}allowExcessArguments(e=!0){return this._allowExcessArguments=!!e,this}enablePositionalOptions(e=!0){return this._enablePositionalOptions=!!e,this}passThroughOptions(e=!0){return this._passThroughOptions=!!e,this._checkForBrokenPassThrough(),this}_checkForBrokenPassThrough(){if(this.parent&&this._passThroughOptions&&!this.parent._enablePositionalOptions)throw new Error(`passThroughOptions cannot be used for '${this._name}' without turning on enablePositionalOptions for parent command(s)`)}storeOptionsAsProperties(e=!0){if(this.options.length)throw new Error("call .storeOptionsAsProperties() before adding options");if(Object.keys(this._optionValues).length)throw new Error("call .storeOptionsAsProperties() before setting option values");return this._storeOptionsAsProperties=!!e,this}getOptionValue(e){return this._storeOptionsAsProperties?this[e]:this._optionValues[e]}setOptionValue(e,t){return this.setOptionValueWithSource(e,t,void 0)}setOptionValueWithSource(e,t,i){return this._storeOptionsAsProperties?this[e]=t:this._optionValues[e]=t,this._optionValueSources[e]=i,this}getOptionValueSource(e){return this._optionValueSources[e]}getOptionValueSourceWithGlobals(e){let t;return this._getCommandAndAncestors().forEach(i=>{i.getOptionValueSource(e)!==void 0&&(t=i.getOptionValueSource(e))}),t}_prepareUserArgs(e,t){if(e!==void 0&&!Array.isArray(e))throw new Error("first parameter to parse must be array or undefined");if(t=t||{},e===void 0&&t.from===void 0){h.versions?.electron&&(t.from="electron");let n=h.execArgv??[];(n.includes("-e")||n.includes("--eval")||n.includes("-p")||n.includes("--print"))&&(t.from="eval")}e===void 0&&(e=h.argv),this.rawArgs=e.slice();let i;switch(t.from){case void 0:case"node":this._scriptPath=e[1],i=e.slice(2);break;case"electron":h.defaultApp?(this._scriptPath=e[1],i=e.slice(2)):i=e.slice(1);break;case"user":i=e.slice(0);break;case"eval":i=e.slice(1);break;default:throw new Error(`unexpected parse option { from: '${t.from}' }`)}return!this._name&&this._scriptPath&&this.nameFromFilename(this._scriptPath),this._name=this._name||"program",i}parse(e,t){let i=this._prepareUserArgs(e,t);return this._parseCommand([],i),this}async parseAsync(e,t){let i=this._prepareUserArgs(e,t);return await this._parseCommand([],i),this}_executeSubCommand(e,t){t=t.slice();let i=!1,n=[".js",".ts",".tsx",".mjs",".cjs"];function r(u,d){let f=v.resolve(u,d);if(z.existsSync(f))return f;if(n.includes(v.extname(d)))return;let b=n.find(p=>z.existsSync(`${f}${p}`));if(b)return`${f}${b}`}this._checkForMissingMandatoryOptions(),this._checkForConflictingOptions();let s=e._executableFile||`${this._name}-${e._name}`,c=this._executableDir||"";if(this._scriptPath){let u;try{u=z.realpathSync(this._scriptPath)}catch{u=this._scriptPath}c=v.resolve(v.dirname(u),c)}if(c){let u=r(c,s);if(!u&&!e._executableFile&&this._scriptPath){let d=v.basename(this._scriptPath,v.extname(this._scriptPath));d!==this._name&&(u=r(c,`${d}-${e._name}`))}s=u||s}i=n.includes(v.extname(s));let a;h.platform!=="win32"?i?(t.unshift(s),t=re(h.execArgv).concat(t),a=W.spawn(h.argv[0],t,{stdio:"inherit"})):a=W.spawn(s,t,{stdio:"inherit"}):(t.unshift(s),t=re(h.execArgv).concat(t),a=W.spawn(h.execPath,t,{stdio:"inherit"})),a.killed||["SIGUSR1","SIGUSR2","SIGTERM","SIGINT","SIGHUP"].forEach(d=>{h.on(d,()=>{a.killed===!1&&a.exitCode===null&&a.kill(d)})});let l=this._exitCallback;a.on("close",u=>{u=u??1,l?l(new L(u,"commander.executeSubCommandAsync","(close)")):h.exit(u)}),a.on("error",u=>{if(u.code==="ENOENT"){let d=c?`searched for local subcommand relative to directory '${c}'`:"no directory for search for local subcommand, use .executableDir() to supply a custom directory",f=`'${s}' does not exist
 - if '${e._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name or path
 - ${d}`;throw new Error(f)}else if(u.code==="EACCES")throw new Error(`'${s}' not executable`);if(!l)h.exit(1);else{let d=new L(1,"commander.executeSubCommandAsync","(error)");d.nestedError=u,l(d)}}),this.runningCommand=a}_dispatchSubcommand(e,t,i){let n=this._findCommand(e);n||this.help({error:!0});let r;return r=this._chainOrCallSubCommandHook(r,n,"preSubcommand"),r=this._chainOrCall(r,()=>{if(n._executableHandler)this._executeSubCommand(n,t.concat(i));else return n._parseCommand(t,i)}),r}_dispatchHelpCommand(e){e||this.help();let t=this._findCommand(e);return t&&!t._executableHandler&&t.help(),this._dispatchSubcommand(e,[],[this._getHelpOption()?.long??this._getHelpOption()?.short??"--help"])}_checkNumberOfArguments(){this.registeredArguments.forEach((e,t)=>{e.required&&this.args[t]==null&&this.missingArgument(e.name())}),!(this.registeredArguments.length>0&&this.registeredArguments[this.registeredArguments.length-1].variadic)&&this.args.length>this.registeredArguments.length&&this._excessArguments(this.args)}_processArguments(){let e=(i,n,r)=>{let s=n;if(n!==null&&i.parseArg){let c=`error: command-argument value '${n}' is invalid for argument '${i.name()}'.`;s=this._callParseArg(i,n,r,c)}return s};this._checkNumberOfArguments();let t=[];this.registeredArguments.forEach((i,n)=>{let r=i.defaultValue;i.variadic?n<this.args.length?(r=this.args.slice(n),i.parseArg&&(r=r.reduce((s,c)=>e(i,c,s),i.defaultValue))):r===void 0&&(r=[]):n<this.args.length&&(r=this.args[n],i.parseArg&&(r=e(i,r,i.defaultValue))),t[n]=r}),this.processedArgs=t}_chainOrCall(e,t){return e&&e.then&&typeof e.then=="function"?e.then(()=>t()):t()}_chainOrCallHooks(e,t){let i=e,n=[];return this._getCommandAndAncestors().reverse().filter(r=>r._lifeCycleHooks[t]!==void 0).forEach(r=>{r._lifeCycleHooks[t].forEach(s=>{n.push({hookedCommand:r,callback:s})})}),t==="postAction"&&n.reverse(),n.forEach(r=>{i=this._chainOrCall(i,()=>r.callback(r.hookedCommand,this))}),i}_chainOrCallSubCommandHook(e,t,i){let n=e;return this._lifeCycleHooks[i]!==void 0&&this._lifeCycleHooks[i].forEach(r=>{n=this._chainOrCall(n,()=>r(this,t))}),n}_parseCommand(e,t){let i=this.parseOptions(t);if(this._parseOptionsEnv(),this._parseOptionsImplied(),e=e.concat(i.operands),t=i.unknown,this.args=e.concat(t),e&&this._findCommand(e[0]))return this._dispatchSubcommand(e[0],e.slice(1),t);if(this._getHelpCommand()&&e[0]===this._getHelpCommand().name())return this._dispatchHelpCommand(e[1]);if(this._defaultCommandName)return this._outputHelpIfRequested(t),this._dispatchSubcommand(this._defaultCommandName,e,t);this.commands.length&&this.args.length===0&&!this._actionHandler&&!this._defaultCommandName&&this.help({error:!0}),this._outputHelpIfRequested(i.unknown),this._checkForMissingMandatoryOptions(),this._checkForConflictingOptions();let n=()=>{i.unknown.length>0&&this.unknownOption(i.unknown[0])},r=`command:${this.name()}`;if(this._actionHandler){n(),this._processArguments();let s;return s=this._chainOrCallHooks(s,"preAction"),s=this._chainOrCall(s,()=>this._actionHandler(this.processedArgs)),this.parent&&(s=this._chainOrCall(s,()=>{this.parent.emit(r,e,t)})),s=this._chainOrCallHooks(s,"postAction"),s}if(this.parent&&this.parent.listenerCount(r))n(),this._processArguments(),this.parent.emit(r,e,t);else if(e.length){if(this._findCommand("*"))return this._dispatchSubcommand("*",e,t);this.listenerCount("command:*")?this.emit("command:*",e,t):this.commands.length?this.unknownCommand():(n(),this._processArguments())}else this.commands.length?(n(),this.help({error:!0})):(n(),this._processArguments())}_findCommand(e){if(e)return this.commands.find(t=>t._name===e||t._aliases.includes(e))}_findOption(e){return this.options.find(t=>t.is(e))}_checkForMissingMandatoryOptions(){this._getCommandAndAncestors().forEach(e=>{e.options.forEach(t=>{t.mandatory&&e.getOptionValue(t.attributeName())===void 0&&e.missingMandatoryOptionValue(t)})})}_checkForConflictingLocalOptions(){let e=this.options.filter(i=>{let n=i.attributeName();return this.getOptionValue(n)===void 0?!1:this.getOptionValueSource(n)!=="default"});e.filter(i=>i.conflictsWith.length>0).forEach(i=>{let n=e.find(r=>i.conflictsWith.includes(r.attributeName()));n&&this._conflictingOption(i,n)})}_checkForConflictingOptions(){this._getCommandAndAncestors().forEach(e=>{e._checkForConflictingLocalOptions()})}parseOptions(e){let t=[],i=[],n=t,r=e.slice();function s(a){return a.length>1&&a[0]==="-"}let c=null;for(;r.length;){let a=r.shift();if(a==="--"){n===i&&n.push(a),n.push(...r);break}if(c&&!s(a)){this.emit(`option:${c.name()}`,a);continue}if(c=null,s(a)){let l=this._findOption(a);if(l){if(l.required){let u=r.shift();u===void 0&&this.optionMissingArgument(l),this.emit(`option:${l.name()}`,u)}else if(l.optional){let u=null;r.length>0&&!s(r[0])&&(u=r.shift()),this.emit(`option:${l.name()}`,u)}else this.emit(`option:${l.name()}`);c=l.variadic?l:null;continue}}if(a.length>2&&a[0]==="-"&&a[1]!=="-"){let l=this._findOption(`-${a[1]}`);if(l){l.required||l.optional&&this._combineFlagAndOptionalValue?this.emit(`option:${l.name()}`,a.slice(2)):(this.emit(`option:${l.name()}`),r.unshift(`-${a.slice(2)}`));continue}}if(/^--[^=]+=/.test(a)){let l=a.indexOf("="),u=this._findOption(a.slice(0,l));if(u&&(u.required||u.optional)){this.emit(`option:${u.name()}`,a.slice(l+1));continue}}if(s(a)&&(n=i),(this._enablePositionalOptions||this._passThroughOptions)&&t.length===0&&i.length===0){if(this._findCommand(a)){t.push(a),r.length>0&&i.push(...r);break}else if(this._getHelpCommand()&&a===this._getHelpCommand().name()){t.push(a),r.length>0&&t.push(...r);break}else if(this._defaultCommandName){i.push(a),r.length>0&&i.push(...r);break}}if(this._passThroughOptions){n.push(a),r.length>0&&n.push(...r);break}n.push(a)}return{operands:t,unknown:i}}opts(){if(this._storeOptionsAsProperties){let e={},t=this.options.length;for(let i=0;i<t;i++){let n=this.options[i].attributeName();e[n]=n===this._versionOptionName?this._version:this[n]}return e}return this._optionValues}optsWithGlobals(){return this._getCommandAndAncestors().reduce((e,t)=>Object.assign(e,t.opts()),{})}error(e,t){this._outputConfiguration.outputError(`${e}
`,this._outputConfiguration.writeErr),typeof this._showHelpAfterError=="string"?this._outputConfiguration.writeErr(`${this._showHelpAfterError}
`):this._showHelpAfterError&&(this._outputConfiguration.writeErr(`
`),this.outputHelp({error:!0}));let i=t||{},n=i.exitCode||1,r=i.code||"commander.error";this._exit(n,r,e)}_parseOptionsEnv(){this.options.forEach(e=>{if(e.envVar&&e.envVar in h.env){let t=e.attributeName();(this.getOptionValue(t)===void 0||["default","config","env"].includes(this.getOptionValueSource(t)))&&(e.required||e.optional?this.emit(`optionEnv:${e.name()}`,h.env[e.envVar]):this.emit(`optionEnv:${e.name()}`))}})}_parseOptionsImplied(){let e=new nt(this.options),t=i=>this.getOptionValue(i)!==void 0&&!["default","implied"].includes(this.getOptionValueSource(i));this.options.filter(i=>i.implied!==void 0&&t(i.attributeName())&&e.valueFromOption(this.getOptionValue(i.attributeName()),i)).forEach(i=>{Object.keys(i.implied).filter(n=>!t(n)).forEach(n=>{this.setOptionValueWithSource(n,i.implied[n],"implied")})})}missingArgument(e){let t=`error: missing required argument '${e}'`;this.error(t,{code:"commander.missingArgument"})}optionMissingArgument(e){let t=`error: option '${e.flags}' argument missing`;this.error(t,{code:"commander.optionMissingArgument"})}missingMandatoryOptionValue(e){let t=`error: required option '${e.flags}' not specified`;this.error(t,{code:"commander.missingMandatoryOptionValue"})}_conflictingOption(e,t){let i=s=>{let c=s.attributeName(),a=this.getOptionValue(c),l=this.options.find(d=>d.negate&&c===d.attributeName()),u=this.options.find(d=>!d.negate&&c===d.attributeName());return l&&(l.presetArg===void 0&&a===!1||l.presetArg!==void 0&&a===l.presetArg)?l:u||s},n=s=>{let c=i(s),a=c.attributeName();return this.getOptionValueSource(a)==="env"?`environment variable '${c.envVar}'`:`option '${c.flags}'`},r=`error: ${n(e)} cannot be used with ${n(t)}`;this.error(r,{code:"commander.conflictingOption"})}unknownOption(e){if(this._allowUnknownOption)return;let t="";if(e.startsWith("--")&&this._showSuggestionAfterError){let n=[],r=this;do{let s=r.createHelp().visibleOptions(r).filter(c=>c.long).map(c=>c.long);n=n.concat(s),r=r.parent}while(r&&!r._enablePositionalOptions);t=ne(e,n)}let i=`error: unknown option '${e}'${t}`;this.error(i,{code:"commander.unknownOption"})}_excessArguments(e){if(this._allowExcessArguments)return;let t=this.registeredArguments.length,i=t===1?"":"s",r=`error: too many arguments${this.parent?` for '${this.name()}'`:""}. Expected ${t} argument${i} but got ${e.length}.`;this.error(r,{code:"commander.excessArguments"})}unknownCommand(){let e=this.args[0],t="";if(this._showSuggestionAfterError){let n=[];this.createHelp().visibleCommands(this).forEach(r=>{n.push(r.name()),r.alias()&&n.push(r.alias())}),t=ne(e,n)}let i=`error: unknown command '${e}'${t}`;this.error(i,{code:"commander.unknownCommand"})}version(e,t,i){if(e===void 0)return this._version;this._version=e,t=t||"-V, --version",i=i||"output the version number";let n=this.createOption(t,i);return this._versionOptionName=n.attributeName(),this._registerOption(n),this.on("option:"+n.name(),()=>{this._outputConfiguration.writeOut(`${e}
`),this._exit(0,"commander.version",e)}),this}description(e,t){return e===void 0&&t===void 0?this._description:(this._description=e,t&&(this._argsDescription=t),this)}summary(e){return e===void 0?this._summary:(this._summary=e,this)}alias(e){if(e===void 0)return this._aliases[0];let t=this;if(this.commands.length!==0&&this.commands[this.commands.length-1]._executableHandler&&(t=this.commands[this.commands.length-1]),e===t._name)throw new Error("Command alias can't be the same as its name");let i=this.parent?._findCommand(e);if(i){let n=[i.name()].concat(i.aliases()).join("|");throw new Error(`cannot add alias '${e}' to command '${this.name()}' as already have command '${n}'`)}return t._aliases.push(e),this}aliases(e){return e===void 0?this._aliases:(e.forEach(t=>this.alias(t)),this)}usage(e){if(e===void 0){if(this._usage)return this._usage;let t=this.registeredArguments.map(i=>tt(i));return[].concat(this.options.length||this._helpOption!==null?"[options]":[],this.commands.length?"[command]":[],this.registeredArguments.length?t:[]).join(" ")}return this._usage=e,this}name(e){return e===void 0?this._name:(this._name=e,this)}nameFromFilename(e){return this._name=v.basename(e,v.extname(e)),this}executableDir(e){return e===void 0?this._executableDir:(this._executableDir=e,this)}helpInformation(e){let t=this.createHelp();return t.helpWidth===void 0&&(t.helpWidth=e&&e.error?this._outputConfiguration.getErrHelpWidth():this._outputConfiguration.getOutHelpWidth()),t.formatHelp(this,t)}_getHelpContext(e){e=e||{};let t={error:!!e.error},i;return t.error?i=n=>this._outputConfiguration.writeErr(n):i=n=>this._outputConfiguration.writeOut(n),t.write=e.write||i,t.command=this,t}outputHelp(e){let t;typeof e=="function"&&(t=e,e=void 0);let i=this._getHelpContext(e);this._getCommandAndAncestors().reverse().forEach(r=>r.emit("beforeAllHelp",i)),this.emit("beforeHelp",i);let n=this.helpInformation(i);if(t&&(n=t(n),typeof n!="string"&&!Buffer.isBuffer(n)))throw new Error("outputHelp callback must return a string or a Buffer");i.write(n),this._getHelpOption()?.long&&this.emit(this._getHelpOption().long),this.emit("afterHelp",i),this._getCommandAndAncestors().forEach(r=>r.emit("afterAllHelp",i))}helpOption(e,t){return typeof e=="boolean"?(e?this._helpOption=this._helpOption??void 0:this._helpOption=null,this):(e=e??"-h, --help",t=t??"display help for command",this._helpOption=this.createOption(e,t),this)}_getHelpOption(){return this._helpOption===void 0&&this.helpOption(void 0,void 0),this._helpOption}addHelpOption(e){return this._helpOption=e,this}help(e){this.outputHelp(e);let t=h.exitCode||0;t===0&&e&&typeof e!="function"&&e.error&&(t=1),this._exit(t,"commander.help","(outputHelp)")}addHelpText(e,t){let i=["beforeAll","before","after","afterAll"];if(!i.includes(e))throw new Error(`Unexpected value for position to addHelpText.
Expecting one of '${i.join("', '")}'`);let n=`${e}Help`;return this.on(n,r=>{let s;typeof t=="function"?s=t({error:r.error,command:r.command}):s=t,s&&r.write(`${s}
`)}),this}_outputHelpIfRequested(e){let t=this._getHelpOption();t&&e.find(n=>t.is(n))&&(this.outputHelp(),this._exit(0,"commander.helpDisplayed","(outputHelp)"))}};function re(o){return o.map(e=>{if(!e.startsWith("--inspect"))return e;let t,i="127.0.0.1",n="9229",r;return(r=e.match(/^(--inspect(-brk)?)$/))!==null?t=r[1]:(r=e.match(/^(--inspect(-brk|-port)?)=([^:]+)$/))!==null?(t=r[1],/^\d+$/.test(r[3])?n=r[3]:i=r[3]):(r=e.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/))!==null&&(t=r[1],i=r[3],n=r[4]),t&&n!=="0"?`${t}=${i}:${parseInt(n)+1}`:e})}oe.Command=G});var ue=E(_=>{var{Argument:ae}=V(),{Command:X}=se(),{CommanderError:rt,InvalidArgumentError:ce}=$(),{Help:ot}=R(),{Option:le}=U();_.program=new X;_.createCommand=o=>new X(o);_.createOption=(o,e)=>new le(o,e);_.createArgument=(o,e)=>new ae(o,e);_.Command=X;_.Option=le;_.Argument=ae;_.Help=ot;_.CommanderError=rt;_.InvalidArgumentError=ce;_.InvalidOptionArgumentError=ce});var de=C(ue(),1),{program:wt,createCommand:St,createArgument:$t,createOption:kt,CommanderError:Ft,InvalidArgumentError:Vt,InvalidOptionArgumentError:It,Command:he,Argument:Pt,Option:Ht,Help:Nt}=de.default;var pe={name:"next-starter",version:"0.0.0",private:!0,scripts:{dev:"next dev --turbo",build:"next build",start:"next start",lint:"next lint","lint:style":"stylelint **/*.css --fix",app:"node cli/dist/index.cjs"},dependencies:{"@jefferson-calmon/eslint-config":"^0.0.1","@t3-oss/env-nextjs":"^0.11.1",codekit:"^2.11.0","framer-motion":"^11.11.10",geist:"^1.3.1","lucide-react":"^0.453.0",next:"^15.0.1","next-bricks":"^0.14.0","nextjs-toploader":"^3.7.15",polished:"^4.3.1",react:"^18.3.1","react-dom":"^18.3.1",zod:"^3.23.8"},devDependencies:{"@types/node":"^20","@types/react":"^18","@types/react-dom":"^18",eslint:"^8",postcss:"^8",stylelint:"^16.9.0","stylelint-config-clean-order":"^6.1.0","stylelint-config-standard-scss":"^13.1.0",typescript:"^5","typescript-plugin-css-modules":"^5.1.0"}};var S=require("zod");var Ee=C(require("chalk"),1),m=C(require("path"),1);var me=()=>`import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		APP_URL: z.string().url(),
	},

	client: {},

	runtimeEnv: {
		APP_URL: process.env.APP_URL,
	},
});
`;var fe=o=>`/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext } from 'react';

interface ${o.itemName}ContextProps {
	children: React.ReactNode;
}

export interface ${o.itemName}ContextData {}

export const ${o.itemName}Context = createContext({} as ${o.itemName}ContextData);

export function ${o.itemName}ContextProvider(props: ${o.itemName}ContextProps) {
	return (
		<${o.itemName}Context.Provider value={{}}>{props.children}</${o.itemName}Context.Provider>
	);
}

export const use${o.itemName} = () => useContext(${o.itemName}Context);

export const with${o.itemName}Context = (Page: (...props: any) => JSX.Element) =>
	function PageWith${o.itemName}ContextProvider(...props: any) {
		return (
			<${o.itemName}ContextProvider>
				<Page {...props} />
			</${o.itemName}ContextProvider>
		);
	};
`;var K="BaseModel.ts",ge=()=>`export interface BaseModel {
	id: string;

	createdAt: string;
	updatedAt: string;
}

export interface BaseAddress {
	state: string;
	city: string;
	postalCode: string;
	street: string;
	number: string;
	complement?: string;
	neighborhood: string;
}

export type WithoutBaseProps<T> = Omit<T, 'id' | 'updatedAt' | 'createdAt'>;
export type WithoutTimeProps<T> = Omit<T, 'updatedAt' | 'createdAt'>;
`,_e=o=>{let e=o.itemName.split("/").length-1,t=o.itemName.split("/").join("");return`import { Validations } from 'codekit';

import { BaseModel, WithoutBaseProps } from '${e===0?"./BaseModel":`${Array.from({length:e}).map(()=>"../").join("")}BaseModel`}';

export interface ${t} extends BaseModel {

}

export const initial${t}: WithoutBaseProps<${t}> = {

}

export const validations: Validations<${t}> = {

}
`};var ve=C(require("fs"),1),J=C(require("fs-extra"),1);function Oe(o){return ve.default.existsSync(o)}async function Ae(o){return new Promise(e=>{J.default.readFile(o,{encoding:"utf-8"},(t,i)=>e(i))})}async function Ce(o,e){return new Promise(t=>{J.default.outputFile(o,e,i=>{if(i)return t({success:!1,error:i});t({success:!0,error:null})})})}function Y(o){return o.charAt(0).toUpperCase()+o.slice(1)}var x=C(require("@clack/prompts"),1);function xe(o){x.log.error(o),process.exit()}async function be(o){let e=await x.select(o);return x.isCancel(e)&&(x.cancel("Opera\xE7\xE3o cancelada"),process.exit()),e}async function ye(o,e){return e=dt(e),await{model:ct,context:lt,env:ut}[o]({itemName:e})}function ct({itemName:o}){let e=[],t=m.default.join(m.default.dirname(""),"src","models",K);return Oe(t)||e.push({name:K,dir:m.default.join(m.default.dirname(""),"src","models"),content:ge()}),e.push({name:[o,".ts"].join(""),dir:m.default.join(m.default.dirname(""),"src","models"),content:_e({itemName:o})}),e}function lt({itemName:o}){let e=[];return e.push({name:[o,"Context",".tsx"].join(""),dir:m.default.join(m.default.dirname(""),"src","contexts"),content:fe({itemName:o})}),e}async function ut({itemName:o}){let e=[],t="env.ts",i=m.default.join(m.default.dirname(""),"src","config"),n=await Ae(m.default.join(i,t)),r=o.split(" ").join("_").toLocaleUpperCase(),s=await be({message:"Escolha o tipo de vari\xE1vel:",options:[{label:"Server",value:"server",hint:"Vari\xE1veis que ser\xE3o usadas apenas no ambiente do servidor"},{label:"Client",value:"client",hint:"Vari\xE1veis que ser\xE3o expostas no ambiente do cliente"}]});!r.startsWith("NEXT_PUBLIC")&&s==="client"&&(r="NEXT_PUBLIC_".concat(r)),r.startsWith("NEXT_PUBLIC")&&s==="server"&&(r=r.replace("NEXT_PUBLIC_","")),n||(n=me()),n.includes(r)&&xe(`Vari\xE1vel ${Ee.default.cyan(r)} j\xE1 existe nas vari\xE1veis de ambiente`);let c=`${s}: {`,a=`		${r.toUpperCase()}: z.string(),
`;n=n.replace(c,`${c}
${a}`);let l="runtimeEnv: {",u=`		${r.toUpperCase()}: process.env.${r.toUpperCase()},
`;return n=n.replace(l,`${l}
${u}`),e.push({name:["env.ts"].join(""),dir:m.default.join(m.default.dirname(""),"src","config"),content:n}),e}function dt(o){return o.split(" ").map(Y).join(" ").split("/").map(Y).join("/")}var Se=require("@clack/prompts"),w=C(require("chalk"),1),$e=require("path");var we=require("child_process");function y(o){return new Promise(e=>{(0,we.exec)(o,(t,i,n)=>{e({error:t,stderr:n,stdout:i})})})}async function O(o){let e=(0,Se.spinner)(),[t,i,n]=[w.default.cyan(o.name),w.default.magenta(o.dir),(0,$e.join)(o.dir,o.name)];e.start(`Criando arquivo ${t} em ${i}`);let{success:r,error:s}=await Ce(n,o.content.trim()),c=r?"foi criado com sucesso":"falhou ao ser criado";return e.stop(`O arquivo ${t} ${c} em ${i}`),{success:r,error:s,path:n}}async function ke({dependencies:o,dev:e=!1}){let t=e?"depend\xEAncias de dev":"depend\xEAncias",i=o.reduce((s,c,a)=>s+=`${a===0?"":", "}${w.default.cyan(c)}`,"");console.log(`Instalando ${t} ${i}`);let{error:n,stderr:r}=await y(`npm install ${e?"--save-dev":"--save"} ${o.join(" ")}`);return n?(console.log(w.default.yellow(`Falha ao instalar ${t}`)),console.error(w.default.red(r)),{success:!1,error:n}):(console.log(`As ${t} foram instaladas com sucesso`),{success:!0})}var pt=S.z.tuple([S.z.enum(["model","context","env"]),S.z.string(),S.z.object({}),S.z.object({}).optional()]);async function Fe(...o){let[e,t]=pt.parse(o),i=await ye(e,t),n=i[i.length-1];for(let r of i)await O(r).then(async s=>{r===n&&await y(`code ${s.path}`)})}var k=require("zod");var g=C(require("path"),1);var Ve=()=>`import { createFetchInstance } from 'codekit';

export const api = createFetchInstance({
	baseUrl: '',
	onBeforeRequest: (options) => options,
	onResponse: (response) => response,
});
`;var Ie=()=>`import { ClientFirestoreController } from '@next-firebase/data/client';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { firebaseConfig } from '../config';

const isInitialized = getApps().find((app) => app.name === 'client');
if (!isInitialized) initializeApp(firebaseConfig, 'client');

export const app = getApp('client');

export const Auth = getAuth(app);
export const Storage = getStorage(app);
export const Firestore = getFirestore(app);

export const database = ClientFirestoreController(Firestore);
`;var Pe=()=>`import { env } from 'config/env';

export const firebaseConfig = {
	apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
`;var He=()=>`export const errors = {
	// Auth
	'auth/wrong-password':
		'Senha incorreta. Verifique sua senha e tente novamente.',
	'auth/user-disabled':
		'O usu\xE1rio associado \xE0 credencial fornecida foi desativado.',
	'auth/user-not-found': 'N\xE3o encontramos um usu\xE1rio com este e-mail.',
	'auth/weak-password':
		'A senha fornecida \xE9 muito fraca. Escolha uma senha mais segura.',
	'auth/app-deleted':
		'O aplicativo foi exclu\xEDdo. Verifique a configura\xE7\xE3o do seu projeto.',
	'auth/expired-action-code':
		'O c\xF3digo ou link fornecido expirou. Solicite um novo.',
	'auth/invalid-action-code':
		'O c\xF3digo da a\xE7\xE3o \xE9 inv\xE1lido. Verifique o link ou c\xF3digo e tente novamente.',
	'auth/email-already-in-use': 'Este e-mail j\xE1 est\xE1 associado a outra conta.',
	'auth/invalid-email': 'O endere\xE7o de e-mail fornecido n\xE3o \xE9 v\xE1lido.',
	'auth/operation-not-allowed':
		'Este tipo de conta ainda n\xE3o est\xE1 ativado para seu projeto.',
	'auth/account-exists-with-different-credential':
		'Este e-mail est\xE1 associado a outra conta com credenciais diferentes.',
	'auth/auth-domain-config-required':
		'A configura\xE7\xE3o do dom\xEDnio de autentica\xE7\xE3o \xE9 necess\xE1ria.',
	'auth/credential-already-in-use': 'A credencial fornecida j\xE1 est\xE1 em uso.',
	'auth/operation-not-supported-in-this-environment':
		'Esta opera\xE7\xE3o n\xE3o \xE9 suportada neste ambiente. Verifique o uso de http ou https.',
	'auth/timeout':
		'O tempo de resposta foi excedido. Verifique se o dom\xEDnio est\xE1 autorizado.',
	'auth/missing-android-pkg-name':
		'O nome do pacote Android \xE9 necess\xE1rio para a instala\xE7\xE3o do aplicativo.',
	'auth/missing-continue-uri':
		'A URL de continua\xE7\xE3o \xE9 necess\xE1ria na solicita\xE7\xE3o.',
	'auth/missing-ios-bundle-id':
		'O identificador do pacote iOS \xE9 necess\xE1rio para a instala\xE7\xE3o do aplicativo.',
	'auth/invalid-continue-uri': 'A URL de continua\xE7\xE3o fornecida \xE9 inv\xE1lida.',
	'auth/unauthorized-continue-uri':
		'O dom\xEDnio da URL de continua\xE7\xE3o n\xE3o est\xE1 autorizado.',
	'auth/invalid-dynamic-link-domain':
		'O dom\xEDnio de link din\xE2mico fornecido n\xE3o est\xE1 autorizado ou configurado.',
	'auth/argument-error': 'Verifique a configura\xE7\xE3o do link do aplicativo.',
	'auth/invalid-persistence-type':
		'O tipo de persist\xEAncia especificado \xE9 inv\xE1lido.',
	'auth/unsupported-persistence-type':
		'O tipo de persist\xEAncia especificado n\xE3o \xE9 suportado neste ambiente.',
	'auth/invalid-credential': 'A credencial fornecida \xE9 inv\xE1lida ou expirou.',
	'auth/invalid-verification-code':
		'O c\xF3digo de verifica\xE7\xE3o fornecido \xE9 inv\xE1lido.',
	'auth/invalid-verification-id': 'O ID de verifica\xE7\xE3o fornecido \xE9 inv\xE1lido.',
	'auth/custom-token-mismatch':
		'O token fornecido n\xE3o corresponde ao esperado.',
	'auth/invalid-custom-token': 'O token personalizado fornecido \xE9 inv\xE1lido.',
	'auth/captcha-check-failed':
		'O token de resposta do reCAPTCHA \xE9 inv\xE1lido, expirou ou o dom\xEDnio n\xE3o \xE9 permitido.',
	'auth/invalid-phone-number':
		'O n\xFAmero de telefone fornecido est\xE1 em um formato inv\xE1lido (padr\xE3o E.164).',
	'auth/missing-phone-number': 'O n\xFAmero de telefone \xE9 obrigat\xF3rio.',
	'auth/quota-exceeded': 'A cota de envio de SMS foi excedida.',
	'auth/cancelled-popup-request':
		'Apenas uma solicita\xE7\xE3o de janela pop-up \xE9 permitida por vez.',
	'auth/popup-blocked': 'A janela pop-up foi bloqueada pelo navegador.',
	'auth/popup-closed-by-user':
		'A janela pop-up foi fechada pelo usu\xE1rio antes de concluir o login.',
	'auth/unauthorized-domain':
		'O dom\xEDnio do aplicativo n\xE3o est\xE1 autorizado a realizar esta opera\xE7\xE3o.',
	'auth/invalid-user-token': 'O usu\xE1rio atual n\xE3o foi identificado.',
	'auth/user-token-expired': 'O token do usu\xE1rio atual expirou.',
	'auth/null-user': 'N\xE3o h\xE1 um usu\xE1rio atual.',
	'auth/app-not-authorized':
		'O aplicativo n\xE3o est\xE1 autorizado a autenticar com a chave fornecida.',
	'auth/invalid-api-key': 'A chave da API fornecida \xE9 inv\xE1lida.',
	'auth/network-request-failed': 'Falha na conex\xE3o com a rede.',
	'auth/requires-recent-login':
		'O \xFAltimo login do usu\xE1rio n\xE3o atende ao requisito de seguran\xE7a.',
	'auth/too-many-requests':
		'Muitas solicita\xE7\xF5es foram feitas. Tente novamente mais tarde.',
	'auth/web-storage-unsupported':
		'O navegador n\xE3o suporta armazenamento ou o recurso foi desativado.',
	'auth/invalid-claims':
		'Os atributos de cadastro personalizado s\xE3o inv\xE1lidos.',
	'auth/claims-too-large':
		'A solicita\xE7\xE3o excede o tamanho m\xE1ximo permitido de 1 Megabyte.',
	'auth/id-token-expired': 'O token informado expirou.',
	'auth/id-token-revoked': 'O token informado foi revogado.',
	'auth/invalid-argument':
		'Foi fornecido um argumento inv\xE1lido para o m\xE9todo.',
	'auth/invalid-creation-time':
		'O hor\xE1rio de cria\xE7\xE3o deve ser uma data UTC v\xE1lida.',
	'auth/invalid-disabled-field':
		'A propriedade de desabilita\xE7\xE3o do usu\xE1rio \xE9 inv\xE1lida.',
	'auth/invalid-display-name': 'O nome do usu\xE1rio fornecido \xE9 inv\xE1lido.',
	'auth/invalid-email-verified': 'O e-mail fornecido \xE9 inv\xE1lido.',
	'auth/invalid-hash-algorithm':
		'O algoritmo de hash fornecido n\xE3o \xE9 compat\xEDvel.',
	'auth/invalid-hash-block-size':
		'O tamanho do bloco de hash fornecido \xE9 inv\xE1lido.',
	'auth/invalid-hash-derived-key-length':
		'O comprimento da chave derivada do hash fornecido \xE9 inv\xE1lido.',
	'auth/invalid-hash-key':
		'A chave de hash deve ser um buffer de bytes v\xE1lido.',
	'auth/invalid-hash-memory-cost':
		'O custo de mem\xF3ria do hash fornecido \xE9 inv\xE1lido.',
	'auth/invalid-hash-parallelization':
		'A paraleliza\xE7\xE3o do hash fornecida \xE9 inv\xE1lida.',
	'auth/invalid-hash-rounds':
		'O n\xFAmero de rodadas de hash fornecido \xE9 inv\xE1lido.',
	'auth/invalid-hash-salt-separator':
		'O separador de salt do hash deve ser um buffer de bytes v\xE1lido.',
	'auth/invalid-id-token': 'O token de identifica\xE7\xE3o fornecido \xE9 inv\xE1lido.',
	'auth/invalid-last-sign-in-time':
		'O hor\xE1rio do \xFAltimo login deve ser uma data UTC v\xE1lida.',
	'auth/invalid-page-token': 'O token da p\xE1gina fornecido \xE9 inv\xE1lido.',
	'auth/invalid-password':
		'A senha fornecida \xE9 inv\xE1lida. Ela deve ter pelo menos 6 caracteres.',
	'auth/invalid-password-hash': 'O hash da senha fornecida \xE9 inv\xE1lido.',
	'auth/invalid-password-salt': 'O salt da senha fornecida \xE9 inv\xE1lido.',
	'auth/invalid-photo-url': 'A URL da foto de perfil fornecida \xE9 inv\xE1lida.',
	'auth/invalid-provider-id':
		'O identificador do provedor fornecido \xE9 inv\xE1lido.',
	'auth/invalid-session-cookie-duration':
		'A dura\xE7\xE3o do cookie da sess\xE3o deve ser um n\xFAmero v\xE1lido em milissegundos, entre 5 minutos e 2 semanas.',
	'auth/invalid-uid':
		'O identificador fornecido deve ter no m\xE1ximo 128 caracteres.',
	'auth/invalid-user-import':
		'O registro do usu\xE1rio a ser importado \xE9 inv\xE1lido.',
	'auth/invalid-provider-data':
		'Os dados do provedor fornecido s\xE3o inv\xE1lidos.',
	'auth/maximum-user-count-exceeded':
		'O n\xFAmero m\xE1ximo permitido de usu\xE1rios a serem importados foi excedido.',
	'auth/missing-hash-algorithm':
		'\xC9 necess\xE1rio fornecer um algoritmo de hash e seus par\xE2metros para importar usu\xE1rios.',
	'auth/missing-uid':
		'Um identificador \xE9 necess\xE1rio para realizar esta opera\xE7\xE3o.',
	'auth/reserved-claims':
		'Uma ou mais propriedades personalizadas fornecidas usam palavras reservadas.',
	'auth/session-cookie-revoked': 'O cookie da sess\xE3o foi revogado.',
	'auth/uid-already-exists': 'O identificador fornecido j\xE1 est\xE1 em uso.',
	'auth/email-already-exists': 'O e-mail fornecido j\xE1 est\xE1 em uso.',
	'auth/phone-number-already-exists':
		'O n\xFAmero de telefone fornecido j\xE1 est\xE1 em uso.',
	'auth/project-not-found':
		'Nenhum projeto foi encontrado com a chave fornecida.',
	'auth/insufficient-permission':
		'A credencial fornecida n\xE3o tem permiss\xE3o para acessar o recurso solicitado.',
	'auth/internal-error':
		'O servidor de autentica\xE7\xE3o encontrou um erro inesperado ao processar a solicita\xE7\xE3o.',
};

export type Code = keyof typeof errors;
`;var Ne=()=>`import { ServerFirestoreController } from '@next-firebase/data/server';
import { cert, getApp, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

import { firebaseConfig } from '../config';
import { serviceAccount } from './serviceAccount';

const isInitializedServer = getApps().find((app) => app.name === 'server');
if (!isInitializedServer)
	initializeApp(
		{
			credential: cert(serviceAccount),
			...firebaseConfig,
		},
		'server',
	);

export const app = getApp('server');

export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);

export const database = ServerFirestoreController(firestore);
`;var Te=()=>`import { ServiceAccount as FirebaseServiceAccount } from 'firebase-admin/app';

import { env } from 'config/env';

interface ServiceAccount extends FirebaseServiceAccount {
	type: string;
	project_id: string;
	private_key_id: string;
	private_key: string;
	client_email: string;
	client_id: string;
	auth_uri: string;
	token_uri: string;
	auth_provider_x509_cert_url: string;
	client_x509_cert_url: string;
	universe_domain: string;
}

export const serviceAccount: ServiceAccount = {
	type: 'service_account',
	project_id: env.FIREBASE_SERVICE_ACCOUNT_PROJECT_ID,
	private_key_id: env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
	private_key: env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY,
	client_email: env.FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL,
	client_id: env.FIREBASE_SERVICE_ACCOUNT_CLIENT_ID,
	client_x509_cert_url: env.FIREBASE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL,
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	universe_domain: 'googleapis.com',
};
`;function je(o){return{action:{api:mt,firebase:ft}[o]}}async function mt(){let o=await O({dir:g.default.join(g.default.dirname(""),"services"),name:"api.ts",content:Ve()});await y(`code ${o.path}`)}async function ft(){await ke({dependencies:["firebase","firebase-admin","@next-firebase/data"]}),await O({dir:g.default.join(g.default.dirname(""),"services","firebase"),name:"errors.ts",content:He()}),await O({dir:g.default.join(g.default.dirname(""),"services","firebase"),name:"config.ts",content:Pe()}),await O({dir:g.default.join(g.default.dirname(""),"services","firebase","client"),name:"index.ts",content:Ie()}),await O({dir:g.default.join(g.default.dirname(""),"services","firebase","server"),name:"index.ts",content:Ne()}),await O({dir:g.default.join(g.default.dirname(""),"services","firebase","server"),name:"serviceAccount.ts",content:Te()})}var _t=k.z.tuple([k.z.enum(["api","firebase"]),k.z.object({}),k.z.object({}).optional()]);async function qe(...o){let[e]=_t.parse(o),{action:t}=je(e);await t()}var I=new he;I.version(pe.version,"-v, --version","Exibir a vers\xE3o atual do app").name("app").description("CLI feita para automatizar tarefas repetitivas dentro do app");I.command("create <item> <name>").action(Fe);I.command("setup <item>").action(qe);I.parse(process.argv);
