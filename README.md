bower-tinymce-amd
=================

Bower and require JS compatible version of tinymce

Update your requirejs paths

```
requirejs.config({
	paths: {
	    tinyMCE: "components/bower-tinymce-amd/tinyMCE",
	    tinyMCE_source: "components/bower-tinymce-amd/tinymce/tinymce"
	}
}):
```

During optimization exclude tinyMCE_source to preserve relative loading paths tinyMCE_source uses

```
modules: [
	{
		name: 'main'
	},
	{
		name: 'tinyMCE',
		exclude: ['tinyMCE_source']
	}
]
```