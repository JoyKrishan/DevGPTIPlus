  | 'Leg'
  | 'Back'
  // Use FIFO order
  // Having a function seems too much
  // Make sure no junk data in same group
  // The merge function in react-native-body-highlighter will handle duplicates
  const [sameGroup1, setSameGroup1] = useState<BodyPart>({
    color: 'defaultColor',
    slug: 'chest',
    intensity: 0,
    pathArray: [],
  })

  const [sameGroup2, setSameGroup2] = useState<BodyPart>({
    color: 'defaultColor',
    slug: 'chest',
    intensity: 0,
    pathArray: [],
  })

  const [sameGroup3, setSameGroup3] = useState<BodyPart>({
    color: 'defaultColor',
    slug: 'chest',
    intensity: 0,
    pathArray: [],
  })

  const [sameGroup4, setSameGroup4] = useState<BodyPart>({
    color: 'defaultColor',
    slug: 'chest',
    intensity: 0,
    pathArray: [],
  })

  const [sameGroup5, setSameGroup5] = useState<BodyPart>({
    color: 'defaultColor',
    slug: 'chest',
    intensity: 0,
    pathArray: [],
  })

                if (userSelection != 'Shoulder') {
                  setBodyPartSelected({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup1({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup2({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup3({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup4({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup5({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setUserSelection('Shoulder')
                } else {
                  setBodyPartSelected({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup1({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup2({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup3({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup4({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup5({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setUserSelection('')
                }
                if (userSelection != 'chest') {
                  setBodyPartSelected({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup1({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup2({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup3({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup4({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup5({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setUserSelection('chest')
                } else {
                  setBodyPartSelected({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup1({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup2({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup3({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup4({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup5({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setUserSelection('')
                }
                if (userSelection != 'Arm') {
                  setBodyPartSelected({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup1({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup2({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup3({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup4({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup5({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setUserSelection('Arm')
                } else {
                  setBodyPartSelected({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup1({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup2({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup3({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup4({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup5({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setUserSelection('')
                }
                if (userSelection != 'Core') {
                  setBodyPartSelected({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup1({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup2({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup3({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup4({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup5({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setUserSelection('Core')
                } else {
                  setBodyPartSelected({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup1({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup2({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup3({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup4({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup5({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setUserSelection('')
                }
                if (userSelection != 'Leg') {
                  setBodyPartSelected({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup1({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup2({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup3({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup4({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup5({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setUserSelection('Leg')
                } else {
                  setBodyPartSelected({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup1({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup2({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup3({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup4({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup5({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setUserSelection('')
                }
                // Conflict with upper back
                if (userSelection != 'Back') {
                  setBodyPartSelected({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup1({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup2({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup3({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup4({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup5({
                    slug: e.slug,
                    intensity: 2,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setUserSelection('Back')
                } else {
                  setBodyPartSelected({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup1({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup2({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup3({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup4({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setSameGroup5({
                    slug: e.slug,
                    intensity: 0,
                    color: 'defaultColor',
                    pathArray: e.pathArray,
                  })
                  setUserSelection('')
                }
                break

              default:
                // Show Nothing, reset model
                // Not supported
                  intensity: 0,
                setSameGroup1({
                  slug: e.slug,
                  intensity: 0,
                  color: 'defaultColor',
                  pathArray: e.pathArray,
                })
                setSameGroup2({
                  slug: e.slug,
                  intensity: 0,
                  color: 'defaultColor',
                  pathArray: e.pathArray,
                })
                setSameGroup3({
                  slug: e.slug,
                  intensity: 0,
                  color: 'defaultColor',
                  pathArray: e.pathArray,
                })
                setSameGroup4({
                  slug: e.slug,
                  intensity: 0,
                  color: 'defaultColor',
                  pathArray: e.pathArray,
                })
                setSameGroup5({
                  slug: e.slug,
                  intensity: 0,
                  color: 'defaultColor',
                  pathArray: e.pathArray,
                })
                // Please Select Another
            // The Body Part shown first overwrites what come after if slug field are the same
            sameGroup1,
            sameGroup2,
            sameGroup3,
            sameGroup4,
            sameGroup5,