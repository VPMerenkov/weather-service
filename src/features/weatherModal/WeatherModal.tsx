import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CloseIcon } from "../../shared/icons";
import InputComponent from "../../components/InputComponent/InputComponent";
import { PrimaryButton } from "../../components";

const weatherOptions = [
  { value: "sunny", label: "Sunny" },
  { value: "cloudy", label: "Cloudy" },
  { value: "overcast", label: "Overcast" },
];

const schema = z.object({
  date: z.string().min(1, "The date is required"),
  temperature: z
    .string()
    .refine(
      (val) => /^-?\d{1,2}(\.\d{1,2})?$/.test(val) && +val >= -40 && +val <= 40,
      "Enter the temperature from -40 to +40 with no more than 2 decimal places"
    ),
  weather: z.enum(["sunny", "cloudy", "overcast"]),
  author: z
    .string()
    .min(1, "Enter your full name")
    .max(40, "Maximum of 40 characters")
    .refine((val) => /^[А-Яа-яЁёA-Za-z\s]+$/.test(val), "Only letters and spaces"),
  comment: z.string().max(100, "Maximum of 100 characters"),
});

type FormValues = z.infer<typeof schema>;

interface WeatherModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: FormValues) => void;
}

export const WeatherModal = ({ open, onClose, onSubmit }: WeatherModalProps) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const submitHandler = (data: FormValues) => {
    onSubmit(data);
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        <Typography typography={"h6"}>Add Weather Observation</Typography>

        <IconButton onClick={onClose} sx={{ position: "absolute", right: 8, top: 8 }}>
          <CloseIcon className="w-6" />
        </IconButton>
      </DialogTitle>

      <form onSubmit={handleSubmit(submitHandler)} noValidate>
        <DialogContent className="flex flex-col gap-4 py-4">
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <InputComponent
                {...field}
                type="datetime-local"
                label="Date and Time"
                fullWidth
                error={!!errors.date}
                helperText={errors.date?.message}
                InputLabelProps={{ shrink: true }}
              />
            )}
          />

          <Controller
            name="temperature"
            control={control}
            render={({ field }) => (
              <InputComponent
                {...field}
                label="Temperature (°C)"
                placeholder="Enter temperature"
                type="number"
                fullWidth
                error={!!errors.temperature}
                helperText={errors.temperature?.message}
              />
            )}
          />

          <Controller
            name="weather"
            control={control}
            render={({ field }) => (
              <InputComponent
                {...field}
                select
                label="Weather"
                placeholder="Select current weather"
                fullWidth
                error={!!errors.weather}
                helperText={errors.weather?.message}
              >
                {weatherOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </InputComponent>
            )}
          />

          <Controller
            name="author"
            control={control}
            render={({ field }) => (
              <InputComponent
                {...field}
                label="Full name"
                placeholder="Enter your full name"
                fullWidth
                error={!!errors.author}
                helperText={errors.author?.message}
              />
            )}
          />

          <Controller
            name="comment"
            control={control}
            render={({ field }) => (
              <InputComponent
                {...field}
                label={`Comment (${field.value?.length ?? 0}/100)`}
                placeholder="Enter comment"
                fullWidth
                multiline
                rows={3}
                error={!!errors.comment}
                helperText={errors.comment?.message}
              />
            )}
          />
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={onClose}>Cancel</Button>
          <PrimaryButton type="submit" disabled={!isValid} width="120px">
            Save
          </PrimaryButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};
