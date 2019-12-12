# Collapse

## Use
```html
<div data-collapse-group="collapseGroupExample">
  <button data-collapse-trigger="exampleCollapseFirst">Open</button>
  <div data-collapse-target="exampleCollapseFirst" data-collapse-parent="collapseGroupExample">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
  
  <button data-collapse-trigger="exampleCollapseFirst">Open</button>
  <div data-collapse-target="exampleCollapseSecond" data-collapse-parent="collapseGroupExample">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
</div>
```

### Collapse group
Add a container div so if a trigger is used other items will be hidden.
```html
<div data-collapse-group="collapseGroupExample">
  <!-- Collapse elements coming here -->
</div>
```

Now you add the following data-attribute to the collapse items ([see below](#collapsed-item)) so the container div recognizes it's children.
```html
data-collapse-parent="collapseGroupExample"
```

### Trigger
You can add a trigger for a collapse, just add this data-attribute.
```html
data-collapse-trigger="exampleCollapseFirst"
```
### Collapsed item
Then add this attribute to the item you want to collapse. Fill in the same value as for the trigger.
```html
data-collapse-target="exampleCollapseFirst"
```
