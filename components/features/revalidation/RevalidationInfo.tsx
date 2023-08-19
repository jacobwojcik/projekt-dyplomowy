import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Separator } from '@/components/ui/Separator';

const RevalidationInfo = () => {
  return (
    <Card className="mx-4 mt-6 max-w-7xl ">
      <CardHeader>
        <CardTitle>Statyczne generowanie a rewalidacja</CardTitle>
      </CardHeader>
      <CardContent>
        <p>TBD</p>

        <Separator />
        <span className="my-2 block w-full  text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis
          tristique est eget faucibus. Mauris interdum nisl vulputate risus
          maximus ultricies. Proin a luctus mi. Sed orci felis, volutpat quis
          finibus quis, dignissim sed mauris. Curabitur non diam et orci rutrum
          dignissim. Cras sapien magna, mattis et magna nec, pharetra faucibus
          dolor. In hac habitasse platea dictumst. Vestibulum non lacus
          ultrices, pretium orci eu, eleifend turpis. Praesent pulvinar tempus
          turpis, in pharetra ex venenatis at. Phasellus tincidunt risus tortor,
          ac efficitur lectus lacinia eget. Proin molestie venenatis purus, ac
          ultricies massa iaculis ut. In commodo tortor non ante euismod, nec
          imperdiet lorem ultricies. Morbi at lectus ante. Nulla ac nulla at
          ligula rhoncus porttitor quis at dolor. Quisque ut metus eget velit
          imperdiet faucibus.
        </span>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Separator className="mb-3" />
        TBD
      </CardFooter>
    </Card>
  );
};

export default RevalidationInfo;
