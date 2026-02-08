export function MaintenanceScreen() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
          Site Unavailable
        </h1>
        <p className="text-lg text-muted-foreground">
          This website is currently unavailable. Please check back later.
        </p>
      </div>
    </div>
  );
}
