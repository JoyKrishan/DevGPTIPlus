                case 24: return ParseUtc(s, @"yyyyMMddHHmmss.ffffffff\Z");
                case 25: return ParseUtc(s, @"yyyyMMddHHmmss.fffffffff\Z");
                case 26: return ParseUtc(s, @"yyyyMMddHHmmss.fffffffff\Z");
                case 23: return ParseLocal(s, @"yyyyMMddHHmmss.ffffffff");
                case 24: return ParseLocal(s, @"yyyyMMddHHmmss.fffffffff");
                case 25: return ParseLocal(s, @"yyyyMMddHHmmss.ffffffffff");
                case 28: return ParseTimeZone(s, @"yyyyMMddHHmmss.ffffffffzzz");
                case 29: return ParseTimeZone(s, @"yyyyMMddHHmmss.fffffffffzzz");
                case 30: return ParseTimeZone(s, @"yyyyMMddHHmmss.ffffffffffzzz");
                case 26: return ParseTimeZone(s, @"yyyyMMddHHmmss.ffffffffzz");
                case 27: return ParseTimeZone(s, @"yyyyMMddHHmmss.fffffffffzz");
                case 28: return ParseTimeZone(s, @"yyyyMMddHHmmss.ffffffffffzz");