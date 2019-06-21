function Box({children, className}) {
  return <div className={cn(className, 'p-4 border border-pink border-heavy')}>{children}</div>;
}

function Slide({children, className}) {
  return <div className={cn(className, 'bg-gray slide')}>{children}</div>;
}

['Box', () => <Box>some text here</Box>],

['Slide', () => <Slide>this is a slide</Slide>, {notes: require('./slide.md').default}],