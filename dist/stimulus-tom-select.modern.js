import{Controller as t}from"@hotwired/stimulus";import e from"tom-select";class s extends t{connect(){this.options=this.optionsValue,this.initTomSelect()}disconnect(){this.select&&this.select.destroy()}initTomSelect(){this.element&&(this.select=new e(this.element,this.options))}}s.values={options:Object};export{s as default};
//# sourceMappingURL=stimulus-tom-select.modern.js.map
